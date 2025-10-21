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
      className="py-14 sm:py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden bg-background"
    >
      <div className="container mx-auto max-w-3xl relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 sm:space-y-6 mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Prêt à Transformer Votre Business ?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto px-2">
            Chaque prospect mérite votre excellence. Obtenez votre &quot;Agent
            Personnel&quot; IA pour développer sans limites et vendre sans
            stress.
          </p>
        </div>

        {/* Contact Form */}
        <Card className="p-5 sm:p-8 bg-card/80 backdrop-blur-md border border-border shadow-xl rounded-2xl">
          <CardContent className="space-y-6 sm:space-y-8">
            <h3 className="text-lg sm:text-2xl font-semibold text-center">
              Consultation Gratuite
            </h3>

            <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
              {/* Inputs */}
              <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 sm:gap-5">
                <Input
                  type="email"
                  name="email"
                  placeholder="Votre email professionnel"
                  className="h-12 sm:h-14 text-base sm:text-lg px-4"
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Votre numéro de téléphone"
                  className="h-12 sm:h-14 text-base sm:text-lg px-4"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full h-12 sm:h-14 text-sm sm:text-lg font-medium tracking-wide bg-gradient-to-br from-[#DE3A8B]/90 to-[#DE3A8B] hover:from-[#DE3A8B] hover:to-[#c42e7e] text-white rounded-xl shadow-md group transition-all duration-300"
              >
                Démarrer ma Transformation IA
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>

            <p className="text-xs sm:text-sm text-muted-foreground text-center">
              Consultation gratuite • Sans engagement • Résultats garantis
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Background Gradient Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-10 -left-20 w-72 h-72 bg-gradient-to-br from-[#DE3A8B]/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-primary/10 to-transparent blur-2xl rounded-full" />
      </div>
    </section>
  );
};

export default Cta;
