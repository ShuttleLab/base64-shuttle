type Bilingual = { zh: string; en: string };
type HowTo = { id: string; name: Bilingual; steps: Bilingual[] };
type FaqItem = { q: Bilingual; a: Bilingual };

export const WHO_FOR: Bilingual[] = [
  { zh: "Web 开发者", en: "Web Developers" },
  { zh: "API 开发者", en: "API Developers" },
  { zh: "安全工程师", en: "Security Engineers" },
  { zh: "学生和教师", en: "Students & Educators" },
];

export const WHEN_USE: Bilingual[] = [
  { zh: "API 调试：解码 JWT Token 查看 payload 和过期时间", en: "API debugging: decode JWT tokens to inspect payloads and expiration" },
  { zh: "数据编码：将文本转换为 Base64 用于 data URI 或 HTTP 认证", en: "Data encoding: convert text to Base64 for data URIs or HTTP auth" },
  { zh: "安全分析：将二进制数据转换为 Hex 进行取证分析", en: "Security analysis: convert binary data to Hex for forensic analysis" },
  { zh: "前端开发：URL 编码处理查询参数，HTML 实体转义防止 XSS", en: "Frontend dev: URL-encode query params, HTML-escape to prevent XSS" },
  { zh: "文件传输：将文件转换为 Base64 嵌入 JSON 或 HTML", en: "File transfer: convert files to Base64 for embedding in JSON or HTML" },
];

export const HOWTOS: HowTo[] = [
  {
    id: "encode-base64",
    name: { zh: "如何将文本编码为 Base64", en: "How to encode text to Base64" },
    steps: [
      { zh: "打开 Base64 Shuttle 网站（base64.shuttlelab.org）", en: "Open the Base64 Shuttle website (base64.shuttlelab.org)" },
      { zh: "选择 Base64 工具标签", en: "Select the Base64 tool tab" },
      { zh: "在输入框中粘贴或输入文本", en: "Paste or type your text in the input field" },
      { zh: "确保方向设置为「编码」", en: "Make sure the direction is set to Encode" },
      { zh: "复制输出的 Base64 字符串或点击下载", en: "Copy the Base64 output string or click Download" },
    ],
  },
  {
    id: "decode-jwt",
    name: { zh: "如何解码 JWT Token", en: "How to decode a JWT token" },
    steps: [
      { zh: "打开 Base64 Shuttle 网站", en: "Open the Base64 Shuttle website" },
      { zh: "选择 JWT 标签", en: "Select the JWT tab" },
      { zh: "粘贴完整的 JWT Token（xxxxx.yyyyy.zzzzz 格式）", en: "Paste the complete JWT token (xxxxx.yyyyy.zzzzz format)" },
      { zh: "查看解码后的 Header、Payload 和 Signature", en: "View the decoded Header, Payload, and Signature" },
      { zh: "检查过期时间和算法信息", en: "Check the expiration time and algorithm info" },
    ],
  },
  {
    id: "convert-hex",
    name: { zh: "如何将文本转换为 Hex", en: "How to convert text to Hex" },
    steps: [
      { zh: "打开 Base64 Shuttle 网站", en: "Open the Base64 Shuttle website" },
      { zh: "选择 Hex 工具标签", en: "Select the Hex tool tab" },
      { zh: "在输入框中输入文本", en: "Type your text in the input field" },
      { zh: "选择 Hex 输出格式（无分隔、空格分隔或 \\x 前缀）", en: "Choose Hex output format (no separator, space-separated, or \\x prefix)" },
      { zh: "复制转换后的 Hex 字符串", en: "Copy the converted Hex string" },
    ],
  },
];

export const FAQS: FaqItem[] = [
  {
    q: { zh: "Base64 Shuttle 是免费的吗？", en: "Is Base64 Shuttle free?" },
    a: { zh: "是的，Base64 Shuttle 完全免费，没有任何隐藏费用。所有工具都可以无限制使用，无需注册账户。", en: "Yes, Base64 Shuttle is completely free with no hidden costs. All tools can be used without limits and without creating an account." },
  },
  {
    q: { zh: "我的数据会被上传到服务器吗？", en: "Is my data uploaded to a server?" },
    a: { zh: "不会。Base64 Shuttle 的所有编解码操作都在您的浏览器中本地完成，使用原生 JavaScript API。您的数据永远不会离开您的设备。", en: "No. All encoding and decoding in Base64 Shuttle happens locally in your browser using native JavaScript APIs. Your data never leaves your device." },
  },
  {
    q: { zh: "支持哪些编码格式？", en: "What encoding formats are supported?" },
    a: { zh: "Base64 Shuttle 支持六种格式：Base64、URL 编码、HTML 实体、Hex（十六进制）、Unicode 转义和 JWT 解码。所有工具都支持双向编码和解码。", en: "Base64 Shuttle supports six formats: Base64, URL encoding, HTML entities, Hex (hexadecimal), Unicode escapes, and JWT decoding. All tools support bidirectional encoding and decoding." },
  },
  {
    q: { zh: "JWT 解码能验证签名吗？", en: "Can JWT decoding verify signatures?" },
    a: { zh: "不能。Base64 Shuttle 的 JWT 工具只解码令牌的 Header 和 Payload 部分，不验证签名。这适用于调试和检查 payload 内容，但不应用于安全验证。", en: "No. The JWT tool only decodes the Header and Payload sections of the token without verifying the signature. This is useful for debugging and inspecting payload content, but should not be used for security verification." },
  },
  {
    q: { zh: "Base64 编码会增加数据大小吗？", en: "Does Base64 encoding increase data size?" },
    a: { zh: "是的，Base64 编码会将数据大小增加约 33%。这是因为 Base64 使用 4 个 ASCII 字符来表示 3 个字节的二进制数据。Base64 Shuttle 会显示输入和输出的长度以及比率，方便您了解大小变化。", en: "Yes, Base64 encoding increases data size by approximately 33%. This is because Base64 uses 4 ASCII characters to represent 3 bytes of binary data. Base64 Shuttle shows input/output length and ratio so you can see the size change." },
  },
  {
    q: { zh: "可以处理多大的文件？", en: "How large can the files be?" },
    a: { zh: "Base64 Shuttle 没有应用层面的文件大小限制。实际限制取决于您的浏览器和设备内存。对于非常大的文件（超过 100MB），建议使用专门的命令行工具以获得更好的性能。", en: "Base64 Shuttle has no application-level file size limit. The actual limit depends on your browser and device memory. For very large files (over 100MB), using a dedicated command-line tool is recommended for better performance." },
  },
  {
    q: { zh: "URL 编码中 %20 和 + 有什么区别？", en: "What's the difference between %20 and + in URL encoding?" },
    a: { zh: "%20 是标准的 URL 编码空格表示（RFC 3986），而 + 是 application/x-www-form-urlencoded 格式中使用的替代表示。Base64 Shuttle 使用 encodeURIComponent，它使用 %20 编码空格。", en: "%20 is the standard URL encoding for spaces (RFC 3986), while + is an alternative representation used in application/x-www-form-urlencoded format. Base64 Shuttle uses encodeURIComponent, which encodes spaces as %20." },
  },
  {
    q: { zh: "Hex 编码和 Base64 编码有什么区别？", en: "What's the difference between Hex and Base64 encoding?" },
    a: { zh: "Hex 编码使用 2 个十六进制字符表示 1 个字节（100% 膨胀），而 Base64 使用 4 个字符表示 3 个字节（33% 膨胀）。Hex 更易读但更长，Base64 更紧凑但不直观。Hex 常用于安全和取证分析，Base64 常用于数据传输。", en: "Hex encoding uses 2 hex characters per byte (100% expansion), while Base64 uses 4 characters for 3 bytes (33% expansion). Hex is more readable but longer; Base64 is more compact but not human-readable. Hex is common in security/forensics, Base64 in data transfer." },
  },
];

export const COMPARISON = {
  zh: {
    heading: "Base64 Shuttle 与同类工具对比",
    columns: ["功能", "Base64 Shuttle", "base64decode.org", "CyberChef"],
    rows: [
      ["100% 本地处理", "✓", "✓", "✓"],
      ["多格式支持", "✓", "仅 Base64", "✓"],
      ["无需注册", "✓", "✓", "✓"],
      ["JWT 解码", "✓", "✗", "✓"],
      ["实时预览", "✓", "✗", "✓"],
      ["文件转 Base64", "✓", "✗", "✓"],
      ["无广告", "✓", "✗", "✓"],
      ["界面简洁", "✓", "一般", "复杂"],
    ],
  },
  en: {
    heading: "Base64 Shuttle vs Similar Tools",
    columns: ["Feature", "Base64 Shuttle", "base64decode.org", "CyberChef"],
    rows: [
      ["100% Local Processing", "✓", "✓", "✓"],
      ["Multi-Format Support", "✓", "Base64 only", "✓"],
      ["No Registration", "✓", "✓", "✓"],
      ["JWT Decoding", "✓", "✗", "✓"],
      ["Real-time Preview", "✓", "✗", "✓"],
      ["File to Base64", "✓", "✗", "✓"],
      ["Ad-free", "✓", "✗", "✓"],
      ["Clean Interface", "✓", "OK", "Complex"],
    ],
  },
};

export const HEADINGS = {
  whoFor: { zh: "谁在使用 Base64 Shuttle？", en: "Who is Base64 Shuttle for?" },
  whenUse: { zh: "何时使用 Base64 Shuttle？", en: "When should I use Base64 Shuttle?" },
  faq: { zh: "常见问题", en: "Frequently Asked Questions" },
};

export const aboutFaqData = { FAQS, HOWTOS, COMPARISON };
