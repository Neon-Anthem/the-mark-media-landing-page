export interface IProcess {
  tag: string;
  heading: string;
  description: string;
}

export const PROCESS: IProcess[] = [
  {
    tag: "Analysis",
    heading: "Requirement Audit",
    description:
      "Requirement Analysis, Buget Allocation, Positioning hirearchy.",
  },
  {
    tag: "Strategy",
    heading: "Positioning",
    description: "Brand Positioning, Marketing Trends, Influencers List.",
  },
  {
    tag: "Execute",
    heading: "Execution",
    description: "Measureable Outcome, Analytics, Track Growth Metrics",
  },
];
