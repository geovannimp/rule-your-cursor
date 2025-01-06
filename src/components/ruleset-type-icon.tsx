import { RulesetType } from "@/rulesets/ruleset-types";
import {
  CircleIcon,
  CodeIcon,
  PocketKnifeIcon,
  LibraryBigIcon,
  BoxesIcon,
} from "lucide-react";

export const RulesetTypeIcon = ({
  rulesetType,
}: {
  rulesetType: RulesetType;
}) => {
  switch (rulesetType) {
    case "library":
      return <LibraryBigIcon />;
    case "language":
      return <CodeIcon />;
    case "tool":
      return <PocketKnifeIcon />;
    case "framework":
      return <BoxesIcon />;
    default:
      return <CircleIcon />;
  }
};
