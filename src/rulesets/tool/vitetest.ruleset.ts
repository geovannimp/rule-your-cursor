import { Ruleset } from "@/rulesets/types";

export const vitetestRuleset = {
  id: "vitetest",
  name: "Vitest",
  rules: [
    {
      id: "vitetest/use-vitest",
      name: "Use Vitest",
      rule: "Prefer using Vitest over other testing libraries",
      tags: ["vitest", "testing"],
    },
  ],
  type: "tool",
  tags: ["vitest", "testing"],
} satisfies Ruleset<"vitetest">;
