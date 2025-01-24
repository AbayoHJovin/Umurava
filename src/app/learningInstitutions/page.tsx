import Navbar from "@/components/Navbar";
import workSans from "@/fonts/fonts";
import EducationHeroSection from "./Hero";

export default function LearningInstitutions() {
  return (
    <div className={`bg-[#F9FAFB] ${workSans.className}`}>
    <Navbar currentPage="For Learning Institutions" />
    <EducationHeroSection/>
  </div>
  
  );
}
