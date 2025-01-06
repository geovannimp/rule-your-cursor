import { Ruleset } from "@/rulesets/types";

export const typescriptRuleset = {
  id: "typescript",
  name: "TypeScript",
  rules: [
    {
      id: "typescript/no-explicit-any",
      name: "No explicit any",
      rule: "Avoid using 'any' type",
      tags: ["typescript", "any"],
    },
    {
      id: "typescript/no-enum",
      name: "No enum",
      rule: "Avoid using enums",
      tags: ["typescript", "enum"],
    },
    {
      id: "typescript/no-relative-import",
      name: "No relative import",
      rule: "Avoid using relative imports",
      tags: ["typescript", "import"],
    },
    {
      id: "typescript/no-require",
      name: "No require",
      rule: "Avoid using require",
      tags: ["typescript", "require"],
    },
  ],
  type: "language",
  tags: ["typescript"],
} satisfies Ruleset<"typescript">;
