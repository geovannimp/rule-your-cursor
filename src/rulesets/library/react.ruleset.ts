import { Ruleset } from "@/rulesets/types";

export const reactRuleset = {
  id: "react",
  name: "React",
  rules: [
    {
      id: "react/react-functional-component",
      name: "React Functional Component",
      rule: "Prefer functional components over class components",
      tags: ["react", "functional", "component"],
    },
  ],
  type: "library",
  tags: ["react"],
} satisfies Ruleset<"react">;
