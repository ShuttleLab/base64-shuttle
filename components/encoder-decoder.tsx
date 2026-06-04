"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ConversionStats } from "@/components/conversion-stats";
import { Copy, Check, Trash2, ArrowUpDown, ClipboardPaste, Download, Lock, Unlock } from "lucide-react";
import { toast } from "sonner";

interface EncoderDecoderProps {
  encode: (input: string) => string;
  decode: (input: string) => string;
  inputPlaceholder?: string;
  outputPlaceholder?: string;
  mode?: "both" | "encode-only" | "decode-only";
  defaultDirection?: "encode" | "decode";
  children?: React.ReactNode;
}

// toolhelper-style explicit-action layout: input on top, a row of obvious
// action buttons (Encode / Decode / Swap / Clear), result below. Textareas
// grow with their content (field-sizing) instead of fixed heights.
export function EncoderDecoder({
  encode,
  decode,
  inputPlaceholder,
  outputPlaceholder,
  mode = "both",
  children,
}: EncoderDecoderProps) {
  const t = useTranslations("tools");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const run = (dir: "encode" | "decode") => {
    if (!input.trim()) return;
    try {
      setOutput(dir === "encode" ? encode(input) : decode(input));
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : t("error"));
      setOutput("");
    }
  };

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    toast.success(t("copied"));
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError(null);
  };

  const handleSwap = () => {
    if (!output) return;
    setInput(output);
    setOutput("");
    setError(null);
  };

  const handlePaste = async () => {
    const text = await navigator.clipboard.readText();
    setInput(text);
  };

  const handleDownload = () => {
    if (!output) return;
    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "output.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
      {children}

      {/* Input */}
      <div className="space-y-2">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="text-sm font-medium">{t("inputLabel")}</span>
          <div className="flex gap-1 flex-wrap justify-end">
            <Button variant="ghost" size="sm" onClick={handlePaste} className="h-8 px-2 text-xs">
              <ClipboardPaste className="size-3.5" />{t("paste")}
            </Button>
          </div>
        </div>
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={inputPlaceholder || t("inputPlaceholder")}
          className="font-mono text-sm min-h-28 field-sizing-content max-h-[50vh] resize-y"
          style={{ fontSize: "16px" }}
        />
      </div>

      {/* Action row — the core interaction, explicit and obvious */}
      <div className="flex flex-wrap items-center gap-2">
        {mode !== "decode-only" && (
          <Button onClick={() => run("encode")} disabled={!input.trim()} className="h-10 px-5">
            <Lock className="size-4" />{t("encode")}
          </Button>
        )}
        {mode !== "encode-only" && (
          <Button
            onClick={() => run("decode")}
            disabled={!input.trim()}
            variant={mode === "decode-only" ? "default" : "secondary"}
            className="h-10 px-5"
          >
            <Unlock className="size-4" />{t("decode")}
          </Button>
        )}
        <Button variant="outline" onClick={handleSwap} disabled={!output} className="h-10">
          <ArrowUpDown className="size-4" />{t("swap")}
        </Button>
        <Button
          variant="outline"
          onClick={handleClear}
          disabled={!input && !output}
          className="h-10 text-destructive hover:text-destructive"
        >
          <Trash2 className="size-4" />{t("clear")}
        </Button>
      </div>

      {error && (
        <p className="text-sm text-destructive bg-destructive/10 p-3 rounded-md break-words">{error}</p>
      )}

      {/* Output */}
      <div className="space-y-2">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="text-sm font-medium">{t("outputLength")}</span>
          <div className="flex gap-1 flex-wrap justify-end">
            <Button variant="ghost" size="sm" onClick={handleCopy} disabled={!output} className="h-8 px-2 text-xs">
              {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
              {t("copy")}
            </Button>
            <Button variant="ghost" size="sm" onClick={handleDownload} disabled={!output} className="h-8 px-2 text-xs">
              <Download className="size-3.5" />{t("downloadOutput")}
            </Button>
          </div>
        </div>
        <Textarea
          value={output}
          readOnly
          placeholder={outputPlaceholder || t("outputPlaceholder")}
          className="font-mono text-sm min-h-28 field-sizing-content max-h-[50vh] resize-y bg-muted/50"
          style={{ fontSize: "16px" }}
        />
      </div>

      <ConversionStats inputLength={input.length} outputLength={output.length} />
    </div>
  );
}
