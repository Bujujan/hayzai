"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Target, TrendingUp, Zap, ArrowUpRight } from "lucide-react";

const Roi = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const metrics = [
    {
      icon: <Zap className="h-10 w-10 text-blue-500" />,
      title: "Réponse = Conversion",
      desc: "Les leads contactés en minutes convertissent mieux. Réactivité instantanée pour maximiser vos opportunités.",
      stat: "78",
      unit: "%",
      label: "Taux de conversion",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      progress: 78,
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "Montée en Charge Maîtrisée",
      desc: "Gérez les pics d'activité sans recruter. Scalabilité automatique pour une croissance sereine.",
      stat: "10",
      unit: "x",
      label: "Capacité multipliée",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      progress: 100,
    },
    {
      icon: <Target className="h-10 w-10 text-orange-500" />,
      title: "Focus sur la Vente",
      desc: "Concentrez-vous sur la signature, pas la recherche. Automatisation intelligente des tâches répétitives.",
      stat: "15",
      unit: "h",
      label: "Économisées par semaine",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      progress: 85,
    },
  ];

  return (
    <section id="services" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-background pointer-events-none" />
      {/* <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" /> */}
      {/* <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" /> */}

      <div className="container mx-auto rounded-4xl px-4 py-10 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <TrendingUp className="h-4 w-4" />
              Performance Mesurable
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              ROI COMBINÉ - Impact Revenus
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Performance Commerciale optimisée par l&apos;Intelligence
              Artificielle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {metrics.map((item, idx) => (
              <Card
                key={idx}
                className="group relative overflow-hidden border-2 border-border/50 bg-card/80 backdrop-blur-xl rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20"
              >
                <CardContent className="p-8">
                  {/* Icon and Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`${item.bgColor} p-4 rounded-2xl text-primary group-hover:scale-110 transition-transform duration-300`}
                    >
                      {item.icon}
                    </div>
                    <div className="flex items-center gap-1 text-green-500 text-sm font-semibold">
                      <ArrowUpRight className="h-4 w-4" />
                      <span>+{item.progress}%</span>
                    </div>
                  </div>

                  {/* Large Metric Display */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span
                        className={`text-6xl font-bold bg-gradient-to-r ${
                          item.color
                        } bg-clip-text text-transparent transition-all duration-700 ${
                          isVisible ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {item.stat}
                      </span>
                      <span
                        className={`text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                      >
                        {item.unit}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">
                      {item.label}
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${
                          item.color
                        } rounded-full transition-all duration-1000 ease-out ${
                          isVisible ? "w-full" : "w-0"
                        }`}
                        style={{
                          width: isVisible ? `${item.progress}%` : "0%",
                        }}
                      />
                    </div>
                  </div>

                  {/* Title and Description */}
                  <div>
                    <h3 className="text-xl font-bold mb-3 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>

                  {/* Decorative gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { value: "200%", label: "Leads qualifiés" },
              { value: "50%", label: "Conversion améliorée" },
              { value: "24/7", label: "Disponibilité" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold bg-primary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roi;
