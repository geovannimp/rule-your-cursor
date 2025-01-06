import { reactRuleset } from "./library/react.ruleset";
import { typescriptRuleset } from "./language/typescript.ruleset";
import { Ruleset } from "@/rulesets/types";
import { vitetestRuleset } from "@/rulesets/tool/vitetest.ruleset";
import { nextjsRuleset } from "@/rulesets/framework/nextjs.ruleset";
import { tailwindRuleset } from "@/rulesets/library/tailwind.ruleset";

export const rulesets = [
  reactRuleset,
  typescriptRuleset,
  vitetestRuleset,
  nextjsRuleset,
  tailwindRuleset,
] satisfies Ruleset<string>[];
