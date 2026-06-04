export interface JwtParts {
  header: Record<string, unknown> | null;
  payload: Record<string, unknown> | null;
  signature: string;
  headerRaw: string;
  payloadRaw: string;
  error?: string;
  isExpired?: boolean;
  expiresAt?: string;
}

export function decodeJwt(token: string): JwtParts {
  const parts = token.split(".");
  if (parts.length !== 3) {
    return {
      header: null,
      payload: null,
      signature: "",
      headerRaw: "",
      payloadRaw: "",
      error: "Invalid JWT format. Expected 3 parts separated by dots.",
    };
  }

  const [headerB64, payloadB64, signature] = parts;

  let header: Record<string, unknown> | null = null;
  let payload: Record<string, unknown> | null = null;
  let headerRaw = "";
  let payloadRaw = "";
  let error: string | undefined;
  let isExpired: boolean | undefined;
  let expiresAt: string | undefined;

  try {
    headerRaw = atob(headerB64.replace(/-/g, "+").replace(/_/g, "/"));
    header = JSON.parse(headerRaw);
  } catch {
    error = "Failed to decode header. Invalid Base64 or JSON.";
  }

  try {
    payloadRaw = atob(payloadB64.replace(/-/g, "+").replace(/_/g, "/"));
    payload = JSON.parse(payloadRaw);

    if (payload && typeof payload === "object" && "exp" in payload) {
      const exp = payload.exp as number;
      const expDate = new Date(exp * 1000);
      expiresAt = expDate.toISOString();
      isExpired = Date.now() > exp * 1000;
    }
  } catch {
    error = (error ? error + " " : "") + "Failed to decode payload. Invalid Base64 or JSON.";
  }

  return {
    header,
    payload,
    signature,
    headerRaw,
    payloadRaw,
    error,
    isExpired,
    expiresAt,
  };
}
