import React from "react";
import CTAButton from "./CTAButton";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{
      backgroundImage: `url('/hero4.jpg')`, // notice the slash
      }}
    >
      {/* Overlay 
   //<div className="absolute inset-0 bg-black bg-opacity-40"></div>*/}

      {/* Content */}
      <div className="relative z-10 px-4 -mt-3">
        <h1 className="text-6xl md:text-10xl font-extrabold text-white mb-6">
         Earn Certifications that matter!
        </h1>
        <p className="text-brandBlue text-lg md:text-2xl mb-8 -mt-3">
          Certifa helps you earn <span className="font-bold">Global Certifications</span> and 
          <span className="font-bold"> hands-on skills</span> that hiring managers actually seek and respect.
        </p>

        
     {/* Buttons container */}
         <div className="mt-12 flex flex-row justify-center gap-4">
          <CTAButton link="#problem" variant="white" className="w-auto">
            Meet the rebels
          </CTAButton>

          <CTAButton link="#enroll" variant="blue" className="w-auto">
            Enroll Now
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

