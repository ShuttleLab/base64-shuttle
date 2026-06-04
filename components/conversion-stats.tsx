"use client";

import { useTranslations } from "next-intl";

interface ConversionStatsProps {
  inputLength: number;
  outputLength: number;
}

export function ConversionStats({ inputLength, outputLength }: ConversionStatsProps) {
  const t = useTranslations("tools");
  const ratio = inputLength > 0 ? (outputLength / inputLength).toFixed(2) : "—";

  return (
    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground px-1">
      <span>{t("inputLength")}: {inputLength} {t("chars")}</span>
      <span>{t("outputLength")}: {outputLength} {t("chars")}</span>
      <span>{t("ratio")}: {ratio}</span>
    </div>
  );
}
