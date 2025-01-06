"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Textarea } from "@/components/ui/textarea";
import { useSelectedRules } from "@/hooks/use-selected-rules";
import { rulesets } from "@/rulesets";
import { useMemo } from "react";

export default function Home() {
  const { selectedRuleIds } = useSelectedRules();

  const textAreaText = useMemo(() => {
    const rulesetWithSelectRules = rulesets
      .map((ruleset) => {
        return {
          ...ruleset,
          rules: ruleset.rules.filter((rule) =>
            selectedRuleIds.includes(rule.id)
          ),
        };
      })
      .filter((ruleset) => ruleset.rules.length > 0);

    return [
      `You are an expert in ${rulesetWithSelectRules
        .map((ruleset) => ruleset.name)
        .join(
          ", "
        )}, with a deep understanding of best practices and performance optimization techniques in these technologies.`,
      "",
      rulesetWithSelectRules
        .map((ruleset) =>
          [ruleset.name, ...ruleset.rules.map((rule) => `- ${rule.rule}`)].join(
            "\n"
          )
        )
        .join("\n\n"),
    ].join("\n");
  }, [selectedRuleIds]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col p-4 gap-4">
        <main className="flex flex-col gap-8 row-start-2 items-center py-2">
          <p className="text-2xl font-bold">Rule your cursor</p>
        </main>
        <Textarea className="h-full" readOnly value={textAreaText} />
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
      </SidebarInset>
    </SidebarProvider>
  );
}
