import React from "react";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import ComparisonSection from "./components/ComparisonSection";
import CertificationsSection from "./components/CertificationsSection";
import ProgramSection from "./components/ProgramSection";
import ProgramDetailsSection.jsx from "./components/ProgramDetailsSection";


// You will add other sections later, e.g. ComparisonSection, CertificationsSection, etc.

function App() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <HeroSection />

      {/* Problem / Rebel Section */}
      <ProblemSection />

      {/* Add more sections below as we build them */}
      <ComparisonSection /> 
      <CertificationsSection />
      <ProgramSection />
      <ProgramDetailsSection/>
      {/* <AdvantagesSection /> */}
      {/* <ManifestoSection /> */}
      {/* <CTASection /> */}
    </div>
  );
}

export default App;
