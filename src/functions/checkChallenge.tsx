import { ChallengeProps } from "@/types/challengeProps";

export function isChallengeProps(challenge: any): challenge is ChallengeProps {
    return (
      challenge &&
      typeof challenge.challengeId === "string" &&
      typeof challenge.challengeStatus === "string" &&
      typeof challenge.challengeImage === "string" &&
      typeof challenge.challengeName === "string" &&
      typeof challenge.challengeDescription === "string" &&
      Array.isArray(challenge.challegeRequirements) &&
      Array.isArray(challenge.productDesign) &&
      Array.isArray(challenge.derivables) &&
      Array.isArray(challenge.note) &&
      typeof challenge.challengeCategory === "string" &&
      typeof challenge.challengePrize === "string" &&
      Array.isArray(challenge.challengeSkills) &&
      typeof challenge.challengeSeniorityLevel === "string" &&
      typeof challenge.challengeTimeline === "string"
    );
  }
  