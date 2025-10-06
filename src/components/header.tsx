import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          {/* <div className="text-2xl font-bold text-foreground">
            HAYZ<span className="text-accent">AI</span>
          </div> */}
          <div>
            <Image
              src="/images/hayz-logo.png"
              alt="Logo"
              width={140}
              height={100}
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-white/70 hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="#avantages"
              className="text-white/70 hover:text-foreground transition-colors"
            >
              Avantages
            </a>
            <a
              href="#valeurs"
              className="text-white/70 hover:text-foreground transition-colors"
            >
              Valeurs
            </a>
            <a
              href="#contact"
              className="text-white/70 hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
