import Navbar from "@/components/Navbar";
import workSans from "@/fonts/fonts";
import EducationHeroSection from "./Hero";
import OffersAndBenefits from "./Offerings";
import Partners from "./partners";
import SkillsChallengesSection from "./skillsChallenge";
import CallToActionSection from "./CallToAction";
import Footer from "@/components/Footer";

export default function LearningInstitutions() {
  return (
    <div className={`bg-[#F9FAFB] ${workSans.className}`}>
      <Navbar currentPage="For Learning Institutions" />
      <EducationHeroSection />
      <OffersAndBenefits />
      <Partners />
      <SkillsChallengesSection/>
      <CallToActionSection/>
      <Footer/>
    </div>
  );
}
