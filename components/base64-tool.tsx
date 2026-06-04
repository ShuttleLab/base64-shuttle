"use client";

import { useTranslations } from "next-intl";
import { EncoderDecoder } from "@/components/encoder-decoder";
import { encodeBase64, decodeBase64 } from "@/lib/encoders/base64";

export function Base64Tool() {
  const t = useTranslations("tools");
  return (
    <EncoderDecoder
      encode={encodeBase64}
      decode={decodeBase64}
      inputPlaceholder={t("inputPlaceholder")}
      outputPlaceholder={t("outputPlaceholder")}
    />
  );
}
