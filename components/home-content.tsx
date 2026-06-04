"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, FileCode, UserCheck, DollarSign, ArrowRight, Binary, Globe, Code2, Braces, FileText } from "lucide-react";
import { ToolTabs } from "@/components/tool-tabs";
import { Base64Tool } from "@/components/base64-tool";
import { UrlTool } from "@/components/url-tool";
import { HtmlTool } from "@/components/html-tool";
import { JwtTool } from "@/components/jwt-tool";
import { HexTool } from "@/components/hex-tool";
import { UnicodeTool } from "@/components/unicode-tool";
import { FileBase64Tool } from "@/components/file-base64-tool";

type ToolId = "base64" | "url" | "html" | "jwt" | "hex" | "unicode" | "file";

export function HomeContent() {
  const t = useTranslations("home");
  const [activeTool, setActiveTool] = useState<ToolId>("base64");

  const features = [
    { icon: FileCode, title: t("feature1Title"), desc: t("feature1Desc") },
    { icon: Shield, title: t("feature2Title"), desc: t("feature2Desc") },
    { icon: Zap, title: t("feature3Title"), desc: t("feature3Desc") },
    { icon: FileText, title: t("feature4Title"), desc: t("feature4Desc") },
    { icon: UserCheck, title: t("feature5Title"), desc: t("feature5Desc") },
    { icon: DollarSign, title: t("feature6Title"), desc: t("feature6Desc") },
  ];

  const steps = [
    { num: 1, title: t("step1Title"), desc: t("step1Desc") },
    { num: 2, title: t("step2Title"), desc: t("step2Desc") },
    { num: 3, title: t("step3Title"), desc: t("step3Desc") },
  ];

  const toolCards = [
    { id: "base64" as ToolId, icon: Binary, label: "Base64" },
    { id: "url" as ToolId, icon: Globe, label: "URL" },
    { id: "html" as ToolId, icon: Code2, label: "HTML" },
    { id: "jwt" as ToolId, icon: Braces, label: "JWT" },
    { id: "hex" as ToolId, icon: FileCode, label: "Hex" },
    { id: "unicode" as ToolId, icon: FileText, label: "Unicode" },
    { id: "file" as ToolId, icon: FileText, label: "File ↔ Base64" },
  ];

  const renderTool = () => {
    switch (activeTool) {
      case "base64": return <Base64Tool />;
      case "url": return <UrlTool />;
      case "html": return <HtmlTool />;
      case "jwt": return <JwtTool />;
      case "hex": return <HexTool />;
      case "unicode": return <UnicodeTool />;
      case "file": return <FileBase64Tool />;
    }
  };

  return (
    <div>
      <section className="max-w-4xl mx-auto px-4 pt-16 pb-12 text-center">
        <Badge variant="secondary" className="mb-4">{t("featuresHeading")}</Badge>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">Base64 Shuttle</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">{t("subtitle")}</p>
        <div className="flex gap-3 justify-center mb-12">
          <a href="#tool" className="inline-flex items-center justify-center h-9 gap-1.5 rounded-lg bg-primary text-primary-foreground px-4 text-sm font-medium hover:bg-primary/80 transition-colors"><ArrowRight className="size-4 mr-2" />{t("cta")}</a>
          <Link href="/about" className="inline-flex items-center justify-center h-9 gap-1.5 rounded-lg border border-border bg-background px-4 text-sm font-medium hover:bg-muted transition-colors">{t("secondaryCta")}</Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {toolCards.map((tool) => (
            <button key={tool.id} onClick={() => { setActiveTool(tool.id); document.getElementById("tool")?.scrollIntoView({ behavior: "smooth" }); }} className={`flex flex-col items-center gap-2 p-4 rounded-lg border transition-all hover:shadow-md ${activeTool === tool.id ? "border-primary bg-primary/5" : "hover:border-primary/30"}`}>
              <tool.icon className="size-6 text-primary" />
              <span className="text-sm font-medium">{tool.label}</span>
            </button>
          ))}
        </div>
      </section>

      <section id="tool" className="max-w-5xl mx-auto px-4 pb-16">
        <Card className="shadow-lg">
          <CardContent className="p-4 sm:p-6">
            <ToolTabs activeTool={activeTool} onToolChange={setActiveTool} />
            <div className="mt-4">{renderTool()}</div>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-center mb-8">{t("featuresHeading")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="hover:shadow-md transition-shadow">
              <CardContent className="flex items-start gap-4 p-5">
                <div className="rounded-lg bg-primary/10 p-3 shrink-0"><Icon className="size-5 text-primary" /></div>
                <div><h3 className="font-semibold mb-1">{title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{desc}</p></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-center mb-8">{t("howItWorks")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="text-center">
              <div className="inline-flex items-center justify-center size-12 rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">{step.num}</div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <Card className="bg-muted/50">
          <CardContent className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-4">{t("whyTitle")}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{t("whyP1")}</p>
            <p className="text-muted-foreground leading-relaxed">{t("whyP2")}</p>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
          <Shield className="size-4" />
          {t("privacyBadge")}
        </div>
      </section>
    </div>
  );
}
