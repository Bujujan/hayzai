"use client";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";

const Cta = () => {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "563259f2-3323-435e-a68f-bdc5448c5dc9");
    formData.append("from_name", "Hayz AI");
    formData.append("subject", "New Contact Form Submission");

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 px-4 sm:px-8 relative overflow-hidden"
    >
      <div className="container mx-auto rounded-4xl py-6 sm:py-10">
        <div className="container mx-auto relative z-10">
          <div className="max-w-xl sm:max-w-2xl mx-auto text-center px-2 sm:px-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
              Prêt à Transformer Votre Business ?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 leading-relaxed">
              Chaque prospect mérite votre excellence. Obtenez votre &quot;Agent
              Personnel&quot; IA pour développer sans limites et vendre sans
              stress.
            </p>

            <Card className="p-6 sm:p-8 bg-card/80 backdrop-blur-md border border-border shadow-xl rounded-2xl sm:rounded-xl">
              <CardContent className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                  Consultation Gratuite
                </h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Votre email professionnel"
                      className="h-12 text-base sm:text-lg"
                      required
                    />
                    <Input
                      type="phone"
                      name="phone"
                      placeholder="Votre numéro de téléphone"
                      className="h-12 text-base sm:text-lg"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-base sm:text-lg tracking-wide py-5 sm:py-6 bg-gradient-to-br from-[#DE3A8B]/80 to-[#DE3A8B] hover:from-[#DE3A8B]/90 hover:to-[#DE3A8B] text-white rounded-xl shadow-md group hover:cursor-pointer transition-all duration-300"
                  >
                    Démarrer ma Transformation IA
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Consultation gratuite • Sans engagement • Résultats garantis
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
