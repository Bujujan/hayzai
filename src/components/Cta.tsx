"use client";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";

const Cta = () => {
  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "563259f2-3323-435e-a68f-bdc5448c5dc9");
    formData.append("from_name", "Hayz AI");
    formData.append("subject", "New Contact Form Submission");

    const object = Object.fromEntries(formData);
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
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto rounded-4xl py-10 ">
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Prêt à Transformer Votre Business ?
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Chaque prospect mérite votre excellence. Obtenez votre &quot;Agent
              Personnel&quot; IA pour développer sans limites et vendre sans
              stress.
            </p>

            <Card className="p-8 bg-card/80 backdrop-blur-md border border-border shadow-xl rounded-xl">
              <CardContent className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">
                  Consultation Gratuite
                </h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Votre email professionnel"
                      className="h-12 text-lg"
                    />
                    <Input
                      type="phone"
                      name="phone"
                      placeholder="Votre numéro de téléphone"
                      className="h-12 text-lg"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-lg tracking-wide py-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-md group hover:cursor-pointer"
                  >
                    Démarrer ma Transformation IA
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
                <p className="text-sm text-muted-foreground">
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
