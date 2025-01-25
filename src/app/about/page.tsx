import Navbar from "@/components/Navbar"
import SolvedProblems from "./SolvedProblems"
import AboutHeroSection from "./Hero";
import LastAboutSection from "./lastSection";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="bg-[#F9FAFB]">
        <Navbar currentPage="About Us"/>
         <AboutHeroSection/>
         <SolvedProblems/>
         <LastAboutSection/>
         <Footer/>
    </div>
  );
}
