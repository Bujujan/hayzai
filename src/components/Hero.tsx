import React from "react";
import { Badge } from "./ui/badge";
import Herotext from "./ui/herotext";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-[90vh] w-full flex justify-center items-center px-4 sm:px-8 md:px-12 text-center relative bg-cover overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 lg:gap-20 w-full max-w-7xl mx-auto">
        {/* Left content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative z-10">
          <Badge className="mb-4 sm:mb-6 text-xs sm:text-sm font-medium text-white/80 bg-primary/10 rounded-full border border-primary/20">
            Intelligence Artificielle • Service d&apos;automatisation
          </Badge>

          <Herotext />

          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed mb-6 sm:mb-8">
            Maximisez votre ROI, optimisez vos performances et prenez
            l&apos;avantage concurrentiel grâce à notre expertise en
            intelligence artificielle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center w-full">
            <a href="#contact">
              <Button
                size="lg"
                className="text-base sm:text-lg tracking-wide px-6 sm:px-8 py-5 sm:py-6 bg-gradient-to-br from-[#DE3A8B]/80 to-[#DE3A8B] hover:bg-[#DE3A8B]/90 text-white rounded-xl shadow-md group hover:cursor-pointer"
              >
                Consultation Gratuite
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>

        {/* Right image */}
        <div className="flex justify-center items-center">
          <Image
            src="/images/interior-hero.png"
            alt="Hero"
            width={1000}
            height={100}
            className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[1000px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
