import React from "react";
import { Card, CardContent } from "./ui/card";
import { BarChart3, Shield, Users } from "lucide-react";

const Advantages = () => {
  return (
    <section id="avantages" className="py-20 px-4">
      <div className="container mx-auto rounded-4xl px-24 py-24 ">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Avantages Concurrentiels
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Prenez l&apos;avantage avec notre technologie de pointe
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-primary" />,
                title: "Service Premium",
                desc: "Engagement prospects quand la concurrence dort. Disponibilité 24/7 pour ne jamais manquer une opportunité.",
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-primary" />,
                title: "Données Stratégiques",
                desc: "Insights comportementaux pour cibler précisément. Analytics avancés pour optimiser vos stratégies.",
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Image Professionnelle",
                desc: "Expérience client cohérente et haut de gamme. Renforcez votre crédibilité à chaque interaction.",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border bg-card/60 backdrop-blur-md rounded-xl"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
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

export default Advantages;
