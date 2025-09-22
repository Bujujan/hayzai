import React from "react";

const Header = () => {
  return (
    <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50 dark">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-foreground">
            HAYZ<span className="text-accent">AI</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="#avantages"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Avantages
            </a>
            <a
              href="#valeurs"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Valeurs
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
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
