export const rulesetTypes = [
  "language",
  "framework",
  "library",
  "tool",
] as const;

export type RulesetType = (typeof rulesetTypes)[number];
