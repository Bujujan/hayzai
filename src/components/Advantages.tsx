import { Card, CardContent } from "./ui/card";
import { BarChart3, Shield, Users } from "lucide-react";

const Advantages = () => {
  return (
    <section
      id="avantages"
      className="py-12 sm:py-20 px-4 sm:px-8 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-5 w-48 sm:w-72 h-48 sm:h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-5 w-64 sm:w-96 h-64 sm:h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto rounded-4xl px-2 sm:px-8 md:px-24 py-12 sm:py-24">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-block px-3 sm:px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-semibold text-primary">
              Pourquoi Nous Choisir
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
            Avantages Concurrentiels
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            Prenez l&apos;avantage avec notre technologie de pointe
          </p>
        </div>

        {/* Feature cards */}
        <div className="flex flex-col gap-8 sm:gap-12 max-w-5xl mx-auto">
          {[
            {
              icon: <Shield className="h-10 w-10 sm:h-12 sm:w-12" />,
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
              icon: <BarChart3 className="h-10 w-10 sm:h-12 sm:w-12" />,
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
              icon: <Users className="h-10 w-10 sm:h-12 sm:w-12" />,
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
            <div key={idx} className="relative">
              <Card className="group relative overflow-hidden border-2 border-border transition-all duration-500 bg-card/80 backdrop-blur-sm rounded-2xl hover:shadow-2xl">
                <CardContent className="p-0">
                  <div className="flex flex-col md:grid md:grid-cols-[auto_1fr]">
                    {/* Icon section */}
                    <div
                      className={`relative ${item.bgColor} p-6 sm:p-10 flex flex-col items-center justify-center md:min-w-[200px]`}
                    >
                      {/* Badge */}
                      <div className="absolute top-4 left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center font-bold text-base sm:text-lg">
                        {item.badge}
                      </div>

                      {/* Icon */}
                      <div
                        className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}
                      >
                        {item.icon}
                      </div>

                      {/* Decorative dots */}
                      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="w-1.5 h-1.5 rounded-full bg-foreground/20"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-10 flex flex-col justify-center text-center md:text-left">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                        {item.desc}
                      </p>

                      {/* Features (on hover) */}
                      <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-h-0 group-hover:max-h-40 overflow-hidden">
                        {item.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 justify-center md:justify-start"
                          >
                            <div
                              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.color}`}
                            />
                            <span className="text-xs sm:text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                  />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Stats / CTA */}
        <div className="mt-16 sm:mt-20 flex justify-center">
          <div className="flex flex-row items-center justify-center gap-6 sm:gap-8 px-6 sm:px-8 py-6 bg-card/60 backdrop-blur-sm border border-border rounded-2xl w-full sm:w-auto max-w-md sm:max-w-none mx-auto">
            {[
              {
                value: "24/7",
                label: "Disponibilité",
                color: "from-blue-500 to-cyan-500",
              },
              {
                value: "100%",
                label: "Automatisé",
                color: "from-purple-500 to-pink-500",
              },
              {
                value: "+50%",
                label: "Conversion",
                color: "from-orange-500 to-red-500",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center relative flex flex-col items-center"
              >
                <div
                  className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>

                {/* Divider between stats on large screens */}
                {idx < 2 && (
                  <div className="hidden sm:block absolute right-[-4px] top-1/2 -translate-y-1/2 w-px h-8 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
