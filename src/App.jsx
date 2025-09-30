import React from "react";
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
import FloatingWhatsApp from "./components/FloatingWhatsApp";



// You will add other sections later, e.g. ComparisonSection, CertificationsSection, etc.

function App() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
       <Navbar />
      <HeroSection />

      {/* Problem / Rebel Section */}
      <ProblemSection />

      {/* Add more sections below as we build them */}
      <ComparisonSection /> 
      <CertificationsSection />
      <ProgramSection />
      <ProgramDetailsSection/>
      <SkillsKickstartSection/>
      <FAQSection/>
      <ContactSection/>
      <FloatingWhatsApp/>
      {/* <AdvantagesSection /> */}
      {/* <ManifestoSection /> */}
      {/* <CTASection /> */}
    </div>
  );
}

export default App;
