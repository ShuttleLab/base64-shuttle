export function encodeHex(input: string): string {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    const code = input.charCodeAt(i);
    result += code.toString(16).padStart(2, "0");
  }
  return result;
}

export function decodeHex(input: string): string {
  const cleaned = input.replace(/[\s\\x,]/g, "").replace(/^0x/i, "");
  if (cleaned.length % 2 !== 0) {
    throw new Error("Invalid hex string: odd number of characters.");
  }
  let result = "";
  for (let i = 0; i < cleaned.length; i += 2) {
    const byte = parseInt(cleaned.substring(i, i + 2), 16);
    if (isNaN(byte)) {
      throw new Error(`Invalid hex character at position ${i}.`);
    }
    result += String.fromCharCode(byte);
  }
  return result;
}

export function encodeHexFormatted(input: string, format: "none" | "space" | "prefix"): string {
  const hex = encodeHex(input);
  if (format === "none") return hex;
  if (format === "space") {
    return hex.match(/.{1,2}/g)?.join(" ") || hex;
  }
  return hex.match(/.{1,2}/g)?.map((h) => `\\x${h}`).join("") || hex;
}
