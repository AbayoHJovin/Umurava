import Navbar from "@/components/Navbar";
import HeroSection from "./Hero";
import Section2 from "./Section2";
import SkillsChallenge from "./SkillsChallenge";
import HackathonsSection from "./HackathonsSection";
import SKillsChallengeBenefits from "./SkillsChallengeBenefits";

export default function LandingPage() {
  return (
    <div className="space-y-10">
      <Navbar currentPage="Home" />
      <HeroSection />
      <Section2 />
      <SkillsChallenge />
      <HackathonsSection />
      <SKillsChallengeBenefits />
    </div>
  );
}
