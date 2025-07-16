export {};

declare global {
  interface ContributionsUser {
    username: string;
    name: string;
    avatar: string;
  }

  interface ContributionsData {
    repo: string;
    title: string;
    url: string;
    created_at: string;
    number: number;
    type: "User" | "Organization";
    stars: number;
    comments: number;
  }

  interface ContributionsPullRequest extends ContributionsData {
    state: "merged" | "draft" | "open" | "closed";
  }

  interface ContributionsIssues extends ContributionsData {
    state: "open" | "completed" | "not-planned";
  }

  interface Contributions {
    user: ContributionsUser;
    prs: ContributionsPullRequest[];
    issues: ContributionsIssues[];
  }
}
