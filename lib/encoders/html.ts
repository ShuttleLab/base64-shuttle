export function encodeHtml(input: string): string {
  const el = document.createElement("div");
  el.textContent = input;
  return el.innerHTML;
}

export function decodeHtml(input: string): string {
  const el = document.createElement("div");
  el.innerHTML = input;
  return el.textContent || "";
}
