import { Ruleset } from "@/rulesets/types";

export const nextjsRuleset = {
  id: "nextjs",
  name: "Next.js",
  rules: [
    {
      id: "nextjs/use-next-image",
      name: "Use Next Image",
      rule: "Prefer using Next Image over other image libraries",
      tags: ["nextjs", "image"],
    },
    {
      id: "nextjs/use-next-link",
      name: "Use Next Link",
      rule: "Prefer using Next Link over other link libraries",
      tags: ["nextjs", "link"],
    },
    {
      id: "nextjs/use-app-router",
      name: "Use App Router",
      rule: "Prefer using App Router over Page Router",
      tags: ["nextjs", "router"],
    },
    {
      id: "nextjs/use-page-router",
      name: "Use Page Router",
      rule: "Prefer using Page Router over App Router",
      tags: ["nextjs", "router"],
    },
  ],
  type: "framework",
  tags: ["nextjs"],
} satisfies Ruleset<"nextjs">;
