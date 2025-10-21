import {
  ArrowRight,
  Bot,
  Clock10,
  Sparkle,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import React from "react";
import { Card, CardContent } from "./ui/card";

const Chatbot = () => {
  const features = [
    {
      icon: Clock10,
      title: "Disponibilité 24/7 & Capture de Leads",
      description:
        "Ne manquez plus jamais une opportunité. Votre assistant IA répond instantanément à chaque prospect.",
      stats: { value: "+200%", label: "leads qualifiés" },
      highlights: [
        "Réactivité instantanée même hors horaires",
        "78% des clients choisissent qui répond en premier",
        "Recommandations personnalisées en temps réel",
      ],
      gradient: "from-blue-500/10 via-cyan-500/10 to-blue-500/10",
      accentColor: "text-blue-600",
      bgAccent: "bg-blue-500/5",
    },
    {
      icon: TrendingUp,
      title: "Qualification & Conversion Intelligente",
      description:
        "Transformez plus de prospects en clients grâce à une qualification automatique et intelligente.",
      stats: { value: "+50%", label: "de conversion" },
      highlights: [
        "Scoring automatique selon budget et maturité",
        "Priorisation des leads à fort potentiel",
        "Accompagnement du financement hypothécaire",
      ],
      gradient: "from-emerald-500/10 via-green-500/10 to-emerald-500/10",
      accentColor: "text-emerald-600",
      bgAccent: "bg-emerald-500/5",
    },
    {
      icon: Sparkle,
      title: "Efficacité Opérationnelle",
      description:
        "Automatisez les tâches répétitives et concentrez-vous sur ce qui compte vraiment.",
      stats: { value: "15h", label: "économisées/semaine" },
      highlights: [
        "Automatisation complète des tâches répétitives",
        "20-30% de gain de productivité",
        "Gestion de milliers de conversations simultanées",
      ],
      gradient: "from-purple-500/10 via-pink-500/10 to-purple-500/10",
      accentColor: "text-purple-600",
      bgAccent: "bg-purple-500/5",
    },
    {
      icon: Users,
      title: "Nurturing Personnalisé",
      description:
        "Maintenez l'engagement de vos prospects sur le long terme avec un suivi automatisé et personnalisé.",
      stats: { value: "90j", label: "de suivi automatique" },
      highlights: [
        "Séquences d'emails sur 90 jours",
        "Alertes ciblées selon les critères clients",
        "Synchronisation CRM complète",
      ],
      gradient: "from-orange-500/10 via-amber-500/10 to-orange-500/10",
      accentColor: "text-orange-600",
      bgAccent: "bg-orange-500/5",
    },
    {
      icon: Bot,
      title: "Marketing Automatisé",
      description:
        "Restez top-of-mind avec des campagnes marketing intelligentes et automatisées.",
      stats: { value: "∞", label: "campagnes actives" },
      highlights: [
        "Actualités de quartier automatiques",
        "Diffusion instantanée des nouvelles annonces",
        "Parcours client complet automatisé",
      ],
      gradient: "from-rose-500/10 via-red-500/10 to-rose-500/10",
      accentColor: "text-rose-600",
      bgAccent: "bg-rose-500/5",
    },
  ];

  return (
    <section
      id="chatbot-ia"
      className="py-16 px-4 sm:px-6 md:px-8 w-full relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent opacity-50" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent opacity-50" />
      </div>

      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">
              Intelligence Artificielle
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-balance leading-tight">
            Chaque Prospect Mérite
            <br />
            <span className="text-primary">Votre Excellence</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Obtenez votre &quot;Agent Personnel&quot; IA pour développer sans
            limites et vendre sans stress
          </p>
        </div>

        {/* Features */}
        <div className="space-y-20 md:space-y-24">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-10 sm:gap-12 items-center group`}
              >
                {/* Visual Side */}
                <div className="flex-1 w-full max-w-sm sm:max-w-md lg:max-w-none">
                  <div
                    className={`relative aspect-square rounded-2xl sm:rounded-3xl bg-gradient-to-br ${feature.gradient} border border-border/50 p-8 sm:p-12 flex items-center justify-center overflow-hidden group-hover:scale-[1.03] transition-transform duration-500`}
                  >
                    {/* Decorative grid */}
                    <div className="absolute inset-0 opacity-10">
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle, currentColor 1px, transparent 1px)",
                          backgroundSize: "20px 20px",
                        }}
                      />
                    </div>

                    {/* Icon */}
                    <div className="relative z-10">
                      <div
                        className={`w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl ${feature.bgAccent} backdrop-blur-sm flex items-center justify-center group-hover:rotate-6 transition-transform duration-500`}
                      >
                        <Icon
                          className={`h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 ${feature.accentColor}`}
                        />
                      </div>
                    </div>

                    {/* Stats Badge */}
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-background/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border border-border text-center">
                      <div className="text-xl sm:text-2xl font-bold">
                        {feature.stats.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {feature.stats.label}
                      </div>
                    </div>

                    {/* Decorative lights */}
                    <div
                      className={`absolute -bottom-4 -left-4 w-16 h-16 sm:w-24 sm:h-24 rounded-full ${feature.bgAccent} blur-2xl`}
                    />
                    <div
                      className={`absolute -top-4 -right-4 w-20 h-20 sm:w-32 sm:h-32 rounded-full ${feature.bgAccent} blur-3xl`}
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 space-y-6 text-center lg:text-left">
                  <div className="space-y-3">
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${feature.bgAccent} border border-border/50`}
                    >
                      <span
                        className={`text-xs font-semibold ${feature.accentColor}`}
                      >
                        Fonctionnalité {idx + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3 sm:space-y-4">
                    {feature.highlights.map((highlight, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-accent/50 transition-colors group/item text-left"
                      >
                        <div
                          className={`flex-shrink-0 w-6 h-6 rounded-full ${feature.bgAccent} flex items-center justify-center mt-0.5`}
                        >
                          <ArrowRight
                            className={`h-3 w-3 ${feature.accentColor} group-hover/item:translate-x-0.5 transition-transform`}
                          />
                        </div>
                        <p className="text-sm sm:text-base leading-relaxed">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 sm:mt-24 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border w-full sm:w-auto">
            <p className="text-base sm:text-lg font-medium">
              Rejoignez les professionnels qui transforment leur activité avec
              l&apos;IA
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/20 border-2 border-background"
                  />
                ))}
              </div>
              <span>+500 agents immobiliers nous font confiance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;
