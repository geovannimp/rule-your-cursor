import { Ruleset } from "@/rulesets/types";

export const tailwindRuleset = {
  id: "tailwind",
  name: "Tailwind",
  rules: [
    {
      id: "tailwind/no-custom-classname",
      name: "No custom classname",
      rule: "Avoid using custom classnames",
      tags: ["tailwind", "classname", "styling"],
    },
    {
      id: "tailwind/use-only-tailwind",
      name: "Use only Tailwind",
      rule: "Prefer using Tailwind over other styling libraries",
      tags: ["tailwind", "styling"],
    },
  ],
  type: "library",
  tags: ["tailwind", "styling"],
} satisfies Ruleset<"tailwind">;
