export interface ICaseStudies {
  companyName: string;
  description: string;
  imageSrc: string;
  hasBg?: boolean;
  tag: string[];
  objective: string;
  metrics: ICaseStudiesMetrics[];
}

interface ICaseStudiesMetrics {
  label: string;
  value:
    | string
    | {
        val: number;
        prefix?: string;
        suffix?: string;
        decimalPlace?: number;
        spaced?: boolean;
      };
}

export const CASE_STUDIES: ICaseStudies[] = [
  {
    companyName: "Marrakech",
    imageSrc: "/brand-logos-x/marrekesh.jpg",
    description:
      "Influencer marketing campaign focused on relatable, fitness-focused, and humorous content.",
    objective: "Increase brand awareness & consistent visibility",
    tag: ["Influencer Management", "Campaign-Based"],
    metrics: [
      {
        label: "Organic Visibility Growth",
        value: { val: 180_000, suffix: "+ views" },
      },
      {
        label: "Audience Engagement",
        value: { val: 3.8, suffix: "x Growth", decimalPlace: 1 },
      },
    ],
  },
  {
    companyName: "Sephora",
    imageSrc: "/brand-logos-x/sephora.png",
    hasBg: true,
    objective: "High visibility for in-store event launch",
    description:
      "Maximize reach with high-volume influencer presence, focusing on premium, relevant creators, leveraging celebrity appearances, and posting real-time content during events.",
    tag: ["Event"],
    metrics: [
      {
        label: "Content Posting",
        value: "Real-Time",
      },
      {
        label: "Top Class Influencers",
        value: {
          spaced: true,
          prefix: "within",
          val: 24,
          suffix: "hrs",
        },
      },
    ],
  },
];
