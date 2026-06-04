"use client";

import { useTranslations } from "next-intl";
import { EncoderDecoder } from "@/components/encoder-decoder";
import { encodeHtml, decodeHtml } from "@/lib/encoders/html";

export function HtmlTool() {
  const t = useTranslations("tools");
  return (
    <EncoderDecoder
      encode={encodeHtml}
      decode={decodeHtml}
      inputPlaceholder={t("inputPlaceholder")}
      outputPlaceholder={t("outputPlaceholder")}
    />
  );
}
