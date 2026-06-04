"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { EncoderDecoder } from "@/components/encoder-decoder";
import { encodeUnicode, decodeUnicode } from "@/lib/encoders/unicode";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function UnicodeTool() {
  const t = useTranslations("tools");
  const [format, setFormat] = useState<"backslash" | "uplus" | "hexentity" | "decentity">("backslash");

  return (
    <EncoderDecoder
      encode={(input) => encodeUnicode(input, format)}
      decode={decodeUnicode}
    >
      <div className="flex items-center gap-3">
        <Label className="text-sm">{t("unicodeFormat")}</Label>
        <Select value={format} onValueChange={(v) => setFormat(v as "backslash" | "uplus" | "hexentity" | "decentity")}>
          <SelectTrigger className="w-[200px] h-8 text-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="backslash">{t("unicodeBackslash")}</SelectItem>
            <SelectItem value="uplus">{t("unicodeUplus")}</SelectItem>
            <SelectItem value="hexentity">{t("unicodeHexEntity")}</SelectItem>
            <SelectItem value="decentity">{t("unicodeDecEntity")}</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </EncoderDecoder>
  );
}
