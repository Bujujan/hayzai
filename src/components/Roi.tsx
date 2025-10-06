import React from "react";
import { Card, CardContent } from "./ui/card";
import { Target, TrendingUp, Zap } from "lucide-react";

const Roi = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto rounded-4xl px-12 py-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              ROI COMBINÉ - Impact Revenus
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Performance Commerciale optimisée par l&apos;Intelligence
              Artificielle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: "Réponse = Conversion",
                desc: "Les leads contactés en minutes convertissent mieux. Réactivité instantanée pour maximiser vos opportunités.",
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-primary" />,
                title: "Montée en Charge Maîtrisée",
                desc: "Gérez les pics d'activité sans recruter. Scalabilité automatique pour une croissance sereine.",
              },
              {
                icon: <Target className="h-8 w-8 text-primary" />,
                title: "Focus sur la Vente",
                desc: "Concentrez-vous sur la signature, pas la recherche. Automatisation intelligente des tâches répétitives.",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border bg-card/60 backdrop-blur-md rounded-xl"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors text-primary">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roi;
