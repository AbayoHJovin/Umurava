import Navbar from "@/components/Navbar";
import HeroSection from "./Hero";
import Section2 from "./Section2";
import SkillsChallenge from "./SkillsChallenge";
import HackathonsSection from "./HackathonsSection";

export default function LandingPage() {
  return (
    <div className="gap-y-10">
      <Navbar currentPage="Home" />
      <HeroSection />
      <Section2 />
      <SkillsChallenge />
      <HackathonsSection />
    </div>
  );
}
