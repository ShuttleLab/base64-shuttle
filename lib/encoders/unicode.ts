export function encodeUnicode(
  input: string,
  format: "backslash" | "uplus" | "hexentity" | "decentity"
): string {
  let result = "";
  for (const char of input) {
    const code = char.codePointAt(0)!;
    switch (format) {
      case "backslash":
        result += `\\u${code.toString(16).padStart(4, "0")}`;
        break;
      case "uplus":
        result += `U+${code.toString(16).toUpperCase().padStart(4, "0")}`;
        break;
      case "hexentity":
        result += `&#x${code.toString(16)};`;
        break;
      case "decentity":
        result += `&#${code};`;
        break;
    }
  }
  return result;
}

export function decodeUnicode(input: string): string {
  return input.replace(
    /\\u([0-9a-fA-F]{4,6})|U\+([0-9a-fA-F]{4,6})|&#x([0-9a-fA-F]+);|&#(\d+);/g,
    (_match, b1, b2, b3, b4) => {
      const hex = b1 || b2 || b3;
      if (hex) {
        return String.fromCodePoint(parseInt(hex, 16));
      }
      if (b4) {
        return String.fromCodePoint(parseInt(b4, 10));
      }
      return _match;
    }
  );
}
