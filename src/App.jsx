import React, { useEffect } from "react"; // 👈 IMPORT useEffect
import Navbar from "./components/Navbar";  
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import ComparisonSection from "./components/ComparisonSection";
import CertificationsSection from "./components/CertificationsSection";
import ProgramSection from "./components/ProgramSection";
import ProgramDetailsSection from "./components/ProgramDetailsSection";
import SkillsKickstartSection from "./components/SkillsKickstartSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import EnrollForm from "./components/EnrollForm";
import Footer from "./components/Footer";


function App() {

  // 👈 ADD THE useEffect HOOK HERE
  useEffect(() => {
    // This code runs once after the component mounts (loads)
    if (window.location.hash) {
      // Get the ID from the URL (e.g., '#enroll' becomes 'enroll')
      const targetId = window.location.hash.substring(1);
      const targetElement = document.getElementById(targetId);

      // Check if the element exists
      if (targetElement) {
        // Use scrollIntoView to smoothly scroll to the element
        targetElement.scrollIntoView({
          behavior: 'smooth' 
        });
      }
    }
  }, []); // The empty dependency array '[]' ensures this runs only once after the initial render

  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ComparisonSection /> 
      <CertificationsSection />
      <ProgramSection />
      <ProgramDetailsSection />
      <SkillsKickstartSection />
      <FAQSection />
       <EnrollForm/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
