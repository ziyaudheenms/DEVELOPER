import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";

const Hero = () => {
  return (
    <div id="home" className="h-screen w-full  flex md:items-center md:justify-center bg-black-100 antialiased bg-grid-white/[0.02] relative overflow-hidden justify-center items-center">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h2 className="text-center md:tracking-wider  text-blue-100 max-w-lg  mx-auto text-lg">
          dynamic web magivc with nextjs
        </h2>
        {/* <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Transforming Concepts into Seamless <br /> User Experience
        </h1> */}

        <TextGenerateEffect
          words="Transforming Concepts into Seamless User Experience"
          className="text-5xl md:text-10xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
        />
        <p className=" text-center md:tracking-wider mb-4 text-blue-100 max-w-lg  mx-auto text-md">
         Hi! i'm Ziyaudheen,a Next.js-Django Full Stack Developer 
        </p>
       
            <MagicButton/>
  
      </div>
    </div>
  );
};

export default Hero;
