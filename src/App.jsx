import React, { useEffect } from "react";
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

// Set OFFSET_HEIGHT to 64 pixels, which corresponds to the 'h-16' class in the Navbar.
const OFFSET_HEIGHT = 0; 

function App() {

  useEffect(() => {
    // This runs once after the component mounts
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Use a small delay to ensure the scroll calculation runs after the DOM is fully settled.
        setTimeout(() => {
          
          // 1. Calculate the target element's position relative to the document top
          const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          
          // 2. Calculate the final scroll position, subtracting the height of the fixed Navbar
          const offsetPosition = elementPosition - OFFSET_HEIGHT;

          // 3. Perform the smooth scroll
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth' 
          });

        }, 100); 
      }
    }
  }, []);

  return (
    <div className="font-sans">
      {/* NOTE: Since the Navbar is 'fixed', you may need to ensure your HeroSection 
        or the main content div has adequate top padding (like pt-16) 
        to prevent content from hiding under the fixed bar on initial load.
      */}
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
