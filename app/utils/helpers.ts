export { useTimeAgo } from "@vueuse/core";

export const formatStars = (stars: number) => {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1
  }).format(stars);
};

export const mapPrIcons = (state: ContributionsPullRequest["state"]) => {
  switch (state) {
    case "open": return "octicon:git-pull-request-24";
    case "merged": return "octicon:git-merge-24";
    case "draft": return "octicon:git-pull-request-draft-24";
    case "closed": return "octicon:git-pull-request-closed-24";
    default: return "octicon:git-pull-request-24";
  }
};

export const mapIssueIcons = (state: ContributionsIssue["state"]) => {
  switch (state) {
    case "open": return "octicon:issue-opened-24";
    case "completed": return "octicon:issue-closed-24";
    case "not-planned": return "octicon:skip-24";
    default: return "octicon:issue-opened-24";
  }
};
