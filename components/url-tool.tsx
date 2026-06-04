"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { EncoderDecoder } from "@/components/encoder-decoder";
import { encodeUrl, decodeUrl, encodeUrlFull, decodeUrlFull } from "@/lib/encoders/url";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function UrlTool() {
  const t = useTranslations("tools");
  const [urlMode, setUrlMode] = useState<"component" | "full">("component");

  const enc = urlMode === "component" ? encodeUrl : encodeUrlFull;
  const dec = urlMode === "component" ? decodeUrl : decodeUrlFull;

  return (
    <EncoderDecoder encode={enc} decode={dec}>
      <div className="flex items-center gap-3">
        <Label className="text-sm">{t("urlMode")}</Label>
        <Select value={urlMode} onValueChange={(v) => setUrlMode(v as "component" | "full")}>
          <SelectTrigger className="w-[220px] h-8 text-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="component">{t("componentFull")}</SelectItem>
            <SelectItem value="full">{t("componentPartial")}</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </EncoderDecoder>
  );
}
