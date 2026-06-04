"use client";

import { useTranslations } from "next-intl";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ToolId = "base64" | "url" | "html" | "jwt" | "hex" | "unicode" | "file";

interface ToolTabsProps {
  activeTool: ToolId;
  onToolChange: (tool: ToolId) => void;
}

const TOOL_IDS: ToolId[] = ["base64", "url", "html", "jwt", "hex", "unicode", "file"];

export function ToolTabs({ activeTool, onToolChange }: ToolTabsProps) {
  const t = useTranslations("tools");

  return (
    <Tabs value={activeTool} onValueChange={(v) => onToolChange(v as ToolId)}>
      <TabsList className="w-full flex flex-wrap h-auto gap-1">
        {TOOL_IDS.map((id) => (
          <TabsTrigger key={id} value={id} className="text-xs sm:text-sm">
            {t(id)}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
