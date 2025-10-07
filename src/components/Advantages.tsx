import { Card, CardContent } from "./ui/card";
import { BarChart3, Shield, Users } from "lucide-react";

const Advantages = () => {
  return (
    <section id="avantages" className="py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto rounded-4xl px-4 md:px-24 py-24">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary">
                Pourquoi Nous Choisir
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Avantages Concurrentiels
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Prenez l&apos;avantage avec notre technologie de pointe
            </p>
          </div>

          {/* Staggered feature showcase */}
          <div className="space-y-12 max-w-5xl mx-auto">
            {[
              {
                icon: <Shield className="h-12 w-12" />,
                title: "Service Premium",
                desc: "Engagement prospects quand la concurrence dort. Disponibilité 24/7 pour ne jamais manquer une opportunité.",
                badge: "01",
                color: "from-blue-500 to-cyan-500",
                bgColor: "bg-blue-500/10",
                features: [
                  "Réponse instantanée 24/7",
                  "Zéro opportunité manquée",
                  "Support multicanal",
                ],
              },
              {
                icon: <BarChart3 className="h-12 w-12" />,
                title: "Données Stratégiques",
                desc: "Insights comportementaux pour cibler précisément. Analytics avancés pour optimiser vos stratégies.",
                badge: "02",
                color: "from-purple-500 to-pink-500",
                bgColor: "bg-purple-500/10",
                features: [
                  "Analytics en temps réel",
                  "Rapports détaillés",
                  "Prédictions IA",
                ],
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: "Image Professionnelle",
                desc: "Expérience client cohérente et haut de gamme. Renforcez votre crédibilité à chaque interaction.",
                badge: "03",
                color: "from-orange-500 to-red-500",
                bgColor: "bg-orange-500/10",
                features: [
                  "Branding personnalisé",
                  "Expérience premium",
                  "Cohérence garantie",
                ],
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`relative ${
                  idx % 2 === 0 ? "md:mr-12" : "md:ml-12"
                }`}
              >
                {/* Connecting line */}
                {idx < 2 && (
                  <div className="hidden md:block absolute top-full left-1/2 w-0.5 h-12 bg-gradient-to-b from-border to-transparent -translate-x-1/2" />
                )}

                <Card className="group relative overflow-hidden border-2 border-border transition-all duration-500 bg-card/80 backdrop-blur-sm rounded-2xl hover:shadow-2xl">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-[auto_1fr] gap-0">
                      {/* Icon section with gradient background */}
                      <div
                        className={`relative ${item.bgColor} p-8 md:p-12 flex flex-col items-center justify-center min-w-[200px]`}
                      >
                        {/* Badge number */}
                        <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center font-bold text-lg">
                          {item.badge}
                        </div>

                        {/* Large icon with gradient */}
                        <div
                          className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}
                        >
                          {item.icon}
                        </div>

                        {/* Decorative dots */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className="w-1.5 h-1.5 rounded-full bg-foreground/20"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Content section */}
                      <div className="p-8 md:p-10 flex flex-col justify-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {item.desc}
                        </p>

                        {/* Feature list - revealed on hover */}
                        <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-h-0 group-hover:max-h-40 overflow-hidden">
                          {item.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div
                                className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.color}`}
                              />
                              <span className="text-sm text-muted-foreground">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Hover gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                    />
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Bottom CTA or stats */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-8 px-8 py-6 bg-card/60 backdrop-blur-sm border border-border rounded-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Disponibilité
                </div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Automatisé
                </div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  +50%
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Conversion
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
