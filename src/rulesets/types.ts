import { RulesetType } from "@/rulesets/ruleset-types";

export type Rule<RulesetId extends string = string> = {
  id: `${RulesetId}/${string}`;
  name: string;
  rule: string;
  tags: string[];
};

export type Ruleset<RulesetId extends string> = {
  id: RulesetId;
  name: string;
  rules: Rule<RulesetId>[];
  type: RulesetType;
  tags: string[];
};
