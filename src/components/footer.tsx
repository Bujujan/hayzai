import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-background text-foreground">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              HAYZ<span className="text-accent">AI</span>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              Votre partenaire en transformation digitale et intelligence
              artificielle.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>Consultation IA</li>
              <li>Automatisation</li>
              <li>Optimisation ROI</li>
              <li>Formation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Entreprise</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>À propos</li>
              <li>Équipe</li>
              <li>Carrières</li>
              <li>Partenaires</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>hello@aiconseil.fr</li>
              <li>+33 1 23 45 67 89</li>
              <li>Paris, France</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-foreground/20 mt-8 pt-8 text-center text-foreground/60">
          <p>&copy; 2025 AIConseil. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
