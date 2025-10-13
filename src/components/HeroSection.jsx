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

    {/*  <div className="absolute top-16 left-1/3 w-40 h-40 md:w-64 md:h-64 bg-white opacity-18 rounded-full -rotate-6 animate-ping-slow"></div>
<div className="absolute bottom-10 left-3/4 w-48 h-48 md:w-72 md:h-72 bg-brandBlue opacity-18 rounded-full rotate-12 animate-ping-slow"></div>
<div className="absolute top-1/3 right-1/4 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-56 md:h-56 bg-yellow-400 opacity-12 rounded-full -rotate-45 animate-ping-slow"></div>
<div className="absolute bottom-0 right-2/3 w-28 h-28 md:w-44 md:h-44 bg-blue-200 opacity-18 rounded-full rotate-18 animate-ping-slow"></div>


      {/* Content */}
      <div className="relative z-10 px-4 -mt-2">
        <h1 className="text-6xl md:text-10xl font-extrabold text-white mb-6">
         Earn Certifications that matter!
        </h1>
        <p className="text-brandBlue text-lg md:text-2xl mb-8">
          Certifa <span className="font-bold"> rebels </span> against useless education, arming you with  
          <span className="font-bold">  Real Skills </span> and <span className="font-bold"> Global certifications </span> recruiters can’t ignore!
        </p>

        
     {/* Buttons container */}
         <div className="mt-12 flex flex-row justify-center gap-4">
          <CTAButton link="#problem" variant="white" className="w-auto">
            Reason we rebel
          </CTAButton>

          <CTAButton link="#program-details" variant="blue" className="w-auto">
            Check Programs
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

