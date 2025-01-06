import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";

export const useSelectedRules = () => {
  const [selectedRuleIds, setSelectedRuleIds] = useQueryState(
    "rules",
    parseAsArrayOf(parseAsString).withDefault([])
  );

  const selectRule = (ruleId: string) => {
    setSelectedRuleIds((currentRuleIds) => [...currentRuleIds, ruleId]);
  };

  const deselectRule = (ruleId: string) => {
    setSelectedRuleIds((currentRuleIds) =>
      currentRuleIds.filter((id) => id !== ruleId)
    );
  };

  return { selectedRuleIds, selectRule, deselectRule };
};
