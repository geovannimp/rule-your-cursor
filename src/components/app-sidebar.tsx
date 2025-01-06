"use client";

import { RulesetTypeIcon } from "@/components/ruleset-type-icon";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { useSelectedRules } from "@/hooks/use-selected-rules";
import { rulesets } from "@/rulesets";
import { rulesetTypes } from "@/rulesets/ruleset-types";
import { Rule } from "@/rulesets/types";
import { ChevronRightIcon, FileMinusIcon, FilePlusIcon } from "lucide-react";
import { useState } from "react";

const RulesetTypeNavbar = ({
  currentRulesetId,
  onSelectRuleset,
}: {
  currentRulesetId: string | null;
  onSelectRuleset: (rulesetId: string) => void;
}) => {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Rulesets</SidebarGroupLabel>
          <SidebarMenu>
            {rulesetTypes.map((rulesetType) => (
              <Collapsible
                key={rulesetType}
                asChild
                className="group/collapsible"
              >
                <SidebarMenuItem key={rulesetType}>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      tooltip={`${rulesetType} rulesets`}
                      className="capitalize"
                    >
                      <RulesetTypeIcon rulesetType={rulesetType} />
                      {rulesetType}
                      <ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {rulesets
                        .filter((ruleset) => ruleset.type === rulesetType)
                        .map((ruleset) => (
                          <SidebarMenuSubItem
                            key={ruleset.name}
                            onClick={() => onSelectRuleset(ruleset.id)}
                          >
                            <SidebarMenuSubButton
                              isActive={ruleset.id === currentRulesetId}
                              className="cursor-pointer"
                              onClick={() => onSelectRuleset(ruleset.id)}
                            >
                              {ruleset.name}
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

const RuleMenuItem = ({
  rule,
  selected,
  onSelect,
  onDeselect,
}: {
  rule: Rule;
  selected: boolean;
  onSelect: () => void;
  onDeselect: () => void;
}) => {
  return (
    <SidebarMenuItem key={rule.id}>
      <SidebarMenuButton
        onClick={selected ? onDeselect : onSelect}
        tooltip={`${rule.tags[0]} rulesets`}
        className="capitalize"
      >
        {rule.name}
        {selected ? (
          <FileMinusIcon className="ml-auto text-red-400" />
        ) : (
          <FilePlusIcon className="ml-auto" />
        )}
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export function RulesetSidebar({
  selectedRuleIds,
  onDeselectRule,
  rulesetId,
  onSelectRule,
}: {
  rulesetId: string;
  selectedRuleIds: string[];
  onSelectRule: (rule: Rule) => void;
  onDeselectRule: (ruleId: string) => void;
}) {
  const ruleset = rulesets.find((ruleset) => ruleset.id === rulesetId);
  return (
    <Sidebar variant="floating" className="left-[--app-sidebar-width]">
      <SidebarHeader className="gap-3.5 border-b p-4">
        <div className="flex w-full items-center justify-between">
          <div className="text-base font-medium text-foreground">
            {ruleset?.name} Ruleset
          </div>
        </div>
        <SidebarInput placeholder="Type to search..." />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Rules</SidebarGroupLabel>
          <SidebarMenu>
            {ruleset?.rules.map((rule) => (
              <RuleMenuItem
                key={rule.id}
                rule={rule}
                selected={selectedRuleIds.includes(rule.id)}
                onSelect={() => onSelectRule(rule)}
                onDeselect={() => onDeselectRule(rule.id)}
              />
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export function AppSidebar() {
  const { selectedRuleIds, selectRule, deselectRule } = useSelectedRules();

  const [rulesetId, setRulesetId] = useState<string | null>(null);

  const handleSelectRule = (rule: Rule) => {
    selectRule(rule.id);
  };

  const handleDeselectRule = (ruleId: string) => {
    deselectRule(ruleId);
  };

  return (
    <>
      <RulesetTypeNavbar
        currentRulesetId={rulesetId}
        onSelectRuleset={setRulesetId}
      />
      {rulesetId && (
        <RulesetSidebar
          rulesetId={rulesetId}
          selectedRuleIds={selectedRuleIds}
          onSelectRule={handleSelectRule}
          onDeselectRule={handleDeselectRule}
        />
      )}
    </>
  );
}
