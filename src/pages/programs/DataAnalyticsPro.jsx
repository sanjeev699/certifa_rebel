import React from "react";
import HeroSection from "../../components/Programs/HeroSection";
import ProgramHighlights from "../../components/Programs/ProgramHighlights";
import Curriculum from "../../components/Programs/Curriculum";
import ImpactSection from "../../components/Programs/ImpactSection";
import CTASection from "../../components/Programs/CTASection";

const DataAnalyticsPro = () => {
  return (
    <div>
      <HeroSection />
      <ProgramHighlights />
      <Curriculum />
      <ImpactSection /> {/* Only for this program */}
      <CTASection />
    </div>
  );
};

export default DataAnalyticsPro;
