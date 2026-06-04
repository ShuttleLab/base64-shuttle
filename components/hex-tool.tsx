"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { EncoderDecoder } from "@/components/encoder-decoder";
import { encodeHexFormatted, decodeHex } from "@/lib/encoders/hex";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function HexTool() {
  const t = useTranslations("tools");
  const [format, setFormat] = useState<"none" | "space" | "prefix">("none");

  return (
    <EncoderDecoder
      encode={(input) => encodeHexFormatted(input, format)}
      decode={decodeHex}
    >
      <div className="flex items-center gap-3">
        <Label className="text-sm">{t("hexFormat")}</Label>
        <Select value={format} onValueChange={(v) => setFormat(v as "none" | "space" | "prefix")}>
          <SelectTrigger className="w-[200px] h-8 text-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">{t("hexNone")}</SelectItem>
            <SelectItem value="space">{t("hexSpace")}</SelectItem>
            <SelectItem value="prefix">{t("hexPrefix")}</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </EncoderDecoder>
  );
}
