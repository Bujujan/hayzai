import React from "react";
import { Badge } from "./ui/badge";
import Herotext from "./ui/herotext";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="h-[90vh] w-full flex justify-center items-center px-4 text-center relative bg-cover overflow-hidden "
      // style={{ backgroundImage: `url('/images/image-mesh-gradient.png')` }}
    >
      {/* <video
        className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="videos\vecteezy_magenta-grid-animation-with-gradient-color-background_48064355.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> */}
      {/* <Image
        src="/images/3d-model.png"
        alt="Logo"
        width={140}
        height={100}
        className="absolute inset-0 left-24 top-12 object-cover mix-blend-screen"
      /> */}
      {/* <div className="absolute bottom-0 right-0 transform translate-x-58 translate-y-10 z-1 w-[30%] h-[30%] -rotate-45 bg-white"></div> */}
      {/* <div className="absolute bottom-0 z-1 w-full h-20 bg-gradient-to-b from-white/0.5 via-white to-white"></div> */}
      {/* <div className="absolute inset-0 bg-[url('/images/noise.jpg')] opacity-5 mix-blend-overlay pointer-events-none"></div> */}

      <div className="flex justify-center items-center">
        <div className="container pl-24 relative z-10 flex flex-col">
          <Badge className="mb-6 text-sm font-medium text-white/80 bg-primary/30">
            Intelligence Artificielle • Service d&apos;automatisation
          </Badge>
          <Herotext />
          {/* <div className="flex justify-center items-center w-[80%]">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Transformez Votre Agence Immobilière avec l&apos;
              <span className="text-primary">IA</span>
            </h1>
          </div> */}
          <p className="text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed mb-8 text-left">
            Maximisez votre ROI, optimisez vos performances et prenez
            l&apos;avantage concurrentiel grâce à notre expertise en
            intelligence artificielle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-left items-center">
            <a href="#contact">
              <Button
                size="lg"
                className="text-lg tracking-wide px-8 py-6 bg-gradient-to-br from-[#DE3A8B]/80 to-[#DE3A8B] hover:bg-[#DE3A8B]/90 text-white rounded-xl shadow-md group hover:cursor-pointer"
              >
                Consultation Gratuite
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center mr-12">
          <Image
            src="/images/interior-hero.png"
            alt="Hero"
            width={1300}
            height={100}
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
