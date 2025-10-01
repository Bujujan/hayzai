import React from "react";
import { Badge } from "./ui/badge";
import Herotext from "./ui/herotext";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="py-20 px-4 text-center relative overflow-hidden  bg-no-repeat bg-cover from-primary/5 via-background to-accent/5"
      style={{ backgroundImage: `url('/images/bg-pink-blue.jpg')` }}
    >
      <div></div>
      <div className="container mx-auto relative z-10 flex flex-col items-center">
        <Badge className="mb-6 text-sm font-medium text-primary bg-primary/10">
          Intelligence Artificielle • Service d&apos;automatisation
        </Badge>
        <Herotext />
        {/* <div className="flex justify-center items-center w-[80%]">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Transformez Votre Agence Immobilière avec l&apos;
              <span className="text-primary">IA</span>
            </h1>
          </div> */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
          Maximisez votre ROI, optimisez vos performances et prenez
          l&apos;avantage concurrentiel grâce à notre expertise en intelligence
          artificielle
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contact">
            <Button
              size="lg"
              className="text-lg tracking-wide px-8 py-6 bg-primary hover:bg-primary/90 text-white rounded-xl shadow-md group"
            >
              Consultation Gratuite
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
