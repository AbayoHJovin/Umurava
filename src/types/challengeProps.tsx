export interface ChallengeProps {
    challengeId: string;
    challengeStatus: "open" | "completed" | "ongoing";
    challengeImage: string;
    challengeName: string;
    challengeDescription: string;
    challegeRequirements: string[];
    productDesign: string[];
    derivables: string[];
    note: string[];
    challengeCategory: string;
    challengePrize: string;
    challengeSkills: string[];
    challengeSeniorityLevel: "(Junior,Intermediate,Senior)";
    challengeTimeline: string;
  }
  