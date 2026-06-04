"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { decodeJwt } from "@/lib/encoders/jwt";
import { AlertTriangle } from "lucide-react";

export function JwtTool() {
  const t = useTranslations("tools");
  const [input, setInput] = useState("");
  const [result, setResult] = useState<ReturnType<typeof decodeJwt> | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(null);

  const process = useCallback((text: string) => {
    if (!text.trim()) { setResult(null); return; }
    setResult(decodeJwt(text));
  }, []);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => process(input), 300);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [input, process]);

  return (
    <div className="space-y-4">
      <Textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste your JWT token here (xxxxx.yyyyy.zzzzz)"
        className="min-h-[100px] font-mono text-sm resize-y"
        style={{ fontSize: "16px" }}
      />
      {result?.error && <p className="text-sm text-destructive">{result.error}</p>}
      {result?.header && (
        <div className="space-y-3">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">Header</Badge>
              </div>
              <pre className="text-sm font-mono whitespace-pre-wrap break-all bg-muted/50 p-3 rounded-md overflow-x-auto">{JSON.stringify(result.header, null, 2)}</pre>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">Payload</Badge>
                {result.isExpired !== undefined && (
                  <Badge variant={result.isExpired ? "destructive" : "default"}>
                    {result.isExpired ? t("jwtExpired") : t("jwtNotExpired")}
                  </Badge>
                )}
                {result.expiresAt && (
                  <span className="text-xs text-muted-foreground">{t("jwtExpiresAt")}: {result.expiresAt}</span>
                )}
              </div>
              <pre className="text-sm font-mono whitespace-pre-wrap break-all bg-muted/50 p-3 rounded-md overflow-x-auto">{JSON.stringify(result.payload, null, 2)}</pre>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">Signature</Badge>
              </div>
              <p className="text-sm font-mono break-all bg-muted/50 p-3 rounded-md">{result.signature}</p>
            </CardContent>
          </Card>
          <div className="flex items-start gap-2 text-xs text-muted-foreground bg-muted/50 p-3 rounded-md">
            <AlertTriangle className="size-4 shrink-0 mt-0.5" />
            <span>{t("jwtSignatureNote")}</span>
          </div>
        </div>
      )}
    </div>
  );
}
