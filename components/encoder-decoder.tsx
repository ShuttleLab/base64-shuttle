"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ConversionStats } from "@/components/conversion-stats";
import { Copy, Check, Trash2, ArrowUpDown, ClipboardPaste, Download, ArrowRight, ArrowLeft } from "lucide-react";
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

export function EncoderDecoder({
  encode,
  decode,
  inputPlaceholder,
  outputPlaceholder,
  mode = "both",
  defaultDirection = "encode",
  children,
}: EncoderDecoderProps) {
  const t = useTranslations("tools");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [direction, setDirection] = useState<"encode" | "decode">(defaultDirection);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(null);

  const process = useCallback(
    (text: string, dir: "encode" | "decode") => {
      if (!text.trim()) {
        setOutput("");
        setError(null);
        return;
      }
      try {
        const result = dir === "encode" ? encode(text) : decode(text);
        setOutput(result);
        setError(null);
      } catch (e) {
        setError(e instanceof Error ? e.message : t("error"));
        setOutput("");
      }
    },
    [encode, decode, t]
  );

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => process(input, direction), 300);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [input, direction, process]);

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
    setInput(output);
    setDirection(direction === "encode" ? "decode" : "encode");
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
      <div className="flex items-center gap-2 justify-center">
        {mode === "both" && (
          <>
            <Button variant={direction === "encode" ? "default" : "outline"} size="sm" onClick={() => setDirection("encode")}>
              <ArrowRight className="size-3.5 mr-1" />{t("encode")}
            </Button>
            <Button variant={direction === "decode" ? "default" : "outline"} size="sm" onClick={() => setDirection("decode")}>
              <ArrowLeft className="size-3.5 mr-1" />{t("decode")}
            </Button>
          </>
        )}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{direction === "encode" ? t("encode") : t("decode")}</span>
            <div className="flex gap-1">
              <Button variant="ghost" size="sm" onClick={handlePaste} className="h-7 px-2 text-xs"><ClipboardPaste className="size-3 mr-1" />{t("paste")}</Button>
              <Button variant="ghost" size="sm" onClick={handleClear} className="h-7 px-2 text-xs"><Trash2 className="size-3 mr-1" />{t("clear")}</Button>
            </div>
          </div>
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={inputPlaceholder || (direction === "encode" ? t("inputPlaceholder") : t("inputPlaceholderDecode"))}
            className="min-h-[200px] font-mono text-sm resize-y"
            style={{ fontSize: "16px" }}
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{t("outputLength")}</span>
            <div className="flex gap-1">
              <Button variant="ghost" size="sm" onClick={handleCopy} disabled={!output} className="h-7 px-2 text-xs">
                {copied ? <Check className="size-3 mr-1" /> : <Copy className="size-3 mr-1" />}
                {t("copy")}
              </Button>
              <Button variant="ghost" size="sm" onClick={handleDownload} disabled={!output} className="h-7 px-2 text-xs"><Download className="size-3 mr-1" />{t("downloadOutput")}</Button>
            </div>
          </div>
          <Textarea
            value={output}
            readOnly
            placeholder={outputPlaceholder || t("outputPlaceholder")}
            className="min-h-[200px] font-mono text-sm resize-y bg-muted/50"
            style={{ fontSize: "16px" }}
          />
        </div>
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <div className="flex items-center justify-between">
        <ConversionStats inputLength={input.length} outputLength={output.length} />
        <Button variant="outline" size="sm" onClick={handleSwap} className="text-xs"><ArrowUpDown className="size-3.5 mr-1" />{t("swap")}</Button>
      </div>
    </div>
  );
}
