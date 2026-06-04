"use client";

import { useState, useRef, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ConversionStats } from "@/components/conversion-stats";
import { Upload, Download, Copy, Check, Trash2 } from "lucide-react";
import { toast } from "sonner";

export function FileBase64Tool() {
  const t = useTranslations("tools");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [direction, setDirection] = useState<"encode" | "decode">("encode");
  const [copied, setCopied] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setOutput(result);
      setInput(file.name);
      setError(null);
      if (file.type.startsWith("image/")) {
        setImagePreview(result);
      } else {
        setImagePreview(null);
      }
    };
    reader.onerror = () => setError(t("fileTooLarge"));
    reader.readAsDataURL(file);
  }, [t]);

  const handleDecodeBase64 = useCallback(() => {
    if (!input.trim()) { setOutput(""); setError(null); return; }
    try {
      const base64Data = input.includes(",") ? input.split(",")[1] : input;
      const binary = atob(base64Data);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
      const blob = new Blob([bytes]);
      const url = URL.createObjectURL(blob);
      setOutput(url);
      setError(null);
      if (input.includes("data:image") || input.startsWith("/9j/") || input.startsWith("iVBOR")) {
        setImagePreview(url);
      } else {
        setImagePreview(null);
      }
    } catch {
      setError(t("invalidBase64"));
      setOutput("");
    }
  }, [input, t]);

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    toast.success(t("copied"));
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!output) return;
    const a = document.createElement("a");
    a.href = output;
    a.download = "decoded-file";
    a.click();
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError(null);
    setImagePreview(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 justify-center">
        <Button variant={direction === "encode" ? "default" : "outline"} size="sm" onClick={() => { setDirection("encode"); handleClear(); }}>
          {t("encode")}
        </Button>
        <Button variant={direction === "decode" ? "default" : "outline"} size="sm" onClick={() => { setDirection("decode"); handleClear(); }}>
          {t("decode")}
        </Button>
      </div>

      {direction === "encode" ? (
        <div className="space-y-3">
          <input type="file" ref={fileRef} className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
          <Card className="border-dashed cursor-pointer hover:border-primary/50 transition-colors" onClick={() => fileRef.current?.click()}>
            <CardContent className="flex flex-col items-center justify-center py-10 gap-2">
              <Upload className="size-8 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">{t("dragFile")}</p>
              <Button variant="outline" size="sm">{t("selectFile")}</Button>
            </CardContent>
          </Card>
          {output && (
            <div className="space-y-2">
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" onClick={handleCopy} className="h-7 px-2 text-xs">
                  {copied ? <Check className="size-3 mr-1" /> : <Copy className="size-3 mr-1" />}{t("copy")}
                </Button>
                <Button variant="ghost" size="sm" onClick={handleClear} className="h-7 px-2 text-xs">
                  <Trash2 className="size-3 mr-1" />{t("clear")}
                </Button>
              </div>
              <Textarea value={output} readOnly className="min-h-[120px] font-mono text-xs bg-muted/50" style={{ fontSize: "16px" }} />
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste Base64 string here..."
            className="min-h-[120px] font-mono text-sm resize-y"
            style={{ fontSize: "16px" }}
          />
          <Button onClick={handleDecodeBase64} size="sm">{t("decode")}</Button>
          {output && (
            <div className="space-y-2">
              <Button variant="outline" size="sm" onClick={handleDownload}>
                <Download className="size-3.5 mr-1" />{t("downloadOutput")}
              </Button>
            </div>
          )}
        </div>
      )}

      {imagePreview && (
        <Card>
          <CardContent className="p-4">
            <p className="text-sm font-medium mb-2">{t("imagePreview")}</p>
            <img src={imagePreview} alt="Preview" className="max-w-full max-h-[300px] object-contain rounded-md" />
          </CardContent>
        </Card>
      )}

      {error && <p className="text-sm text-destructive">{error}</p>}
      <ConversionStats inputLength={input.length} outputLength={output.length} />
    </div>
  );
}
