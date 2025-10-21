"use client";
import React from "react";
import SplitText from "../SplitText";

const Herotext = () => {
  return (
    <SplitText
      text="Transformez Votre Agence Immobilière avec l'IA"
      className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-center w-[90%] text-white"
      delay={50}
      duration={0.6}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-100px"
      textAlign="left sm:text-center"
      tag="h1"
    />
  );
};

export default Herotext;
