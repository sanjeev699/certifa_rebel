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
      <div className="relative z-10 px-4">
        <h1 className="text-8xl md:text-10xl font-extrabold text-white mb-6">
         Earn Certifications that matter!
        </h1>
        <p className="text-white text-lg md:text-2xl mb-8">
          Certifa helps you earn <span className="font-semibold">Global Certifications</span> and 
          <span className="font-semibold"> hands-on skills</span> that hiring managers actually seek and respect.
        </p>

        
     {/* Buttons container */}
       <div className="mt-12 flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto">
          {/* Narrative button: goes to next logical section */}
          <CTAButton link="#problem" variant="white">
            Meet the rebels
          </CTAButton>

          {/* Enroll button: goes to enroll section */}
          <CTAButton link="#enroll" variant="blue">
            Enroll Now
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

