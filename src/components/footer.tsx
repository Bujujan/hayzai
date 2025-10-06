import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 text-foreground">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/images/hayz-logo.png"
                alt="Logo"
                width={140}
                height={100}
              />
            </div>
            <p className="text-foreground/80 leading-relaxed">
              Votre partenaire en transformation digitale et intelligence
              artificielle.
            </p>
          </div>
          {/* <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>Consultation IA</li>
              <li>Automatisation</li>
              <li>Optimisation ROI</li>
              <li>Formation</li>
            </ul>
          </div> */}
          {/* <div>
            <h4 className="font-bold mb-4">Entreprise</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>À propos</li>
              <li>Équipe</li>
              <li>Carrières</li>
              <li>Partenaires</li>
            </ul>
          </div> */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>idk@gmail.com</li>
              <li>+212 123 456 789</li>
              <li>Pays</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-foreground/20 mt-8 pt-8 text-center text-foreground/60">
          <p>&copy; 2025 HAYZAI. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
