import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Target,
  TrendingUp,
  Zap,
  Users,
  BarChart3,
  Shield,
  Sparkle,
  Bot,
  Clock10,
} from "lucide-react";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Chatbot IA Immobilier Section */}
      <section id="chatbot-ia" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Chaque Prospect Mérite Votre Excellence
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Obtenez Votre &quot;Agent Personnel&quot; IA pour Développer Sans
              Limites et Vendre Sans Stress
            </p>
          </div>

          {/* Advantages Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Clock10 className="h-10 w-10 text-primary" />,
                title: "Disponibilité 24/7 & Capture de Leads",
                points: [
                  "Réactivité Instantanée : +200% de leads qualifiés capturés même hors horaires",
                  "Jamais de Lead Manqué : 78% des clients achètent chez le professionnel qui répond en premier",
                  "Recherche Immédiate : Recommandations personnalisées de biens en temps réel",
                ],
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-primary" />,
                title: "Qualification & Conversion Intelligente",
                points: [
                  "Scoring Automatique : Tri automatique selon budget, localisation et maturité du projet",
                  "Taux de Conversion Amélioré : +50% de transformation prospects en clients",
                  "Pré-qualification Hypothécaire : Accompagnement automatique des étapes de financement",
                ],
              },
              {
                icon: <Sparkle className="h-10 w-10 text-primary" />,
                title: "Efficacité Opérationnelle",
                points: [
                  "Économie de 15h/semaine : Automatisation des tâches répétitives",
                  "Gain de Productivité 20-30% : Plus de temps pour les activités à forte valeur",
                  "Gestion Simultanée : Milliers de conversations en parallèle",
                ],
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="group border border-border bg-card/50 backdrop-blur-md rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <ul className="text-muted-foreground text-left list-disc list-inside space-y-2">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Email Outreach & Marketing Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Users className="h-10 w-10 text-accent" />,
                title: "Nurturing Personnalisé",
                points: [
                  "Séquences 90 Jours : Suivi automatique des prospects dans la durée",
                  "Alertes Ciblées : Notifications personnalisées selon les critères clients",
                  "Intégration CRM : Synchronisation complète des données et communications",
                ],
              },
              {
                icon: <Bot className="h-10 w-10 text-accent" />,
                title: "Marketing Automatisé",
                points: [
                  "Actualités Quartier : Informations régulières pour rester top-of-mind",
                  "Diffusion d'Annonces : Notifications instantanées des nouveaux biens",
                  "Campagnes de Conversion : Accompagnement complet du parcours client",
                ],
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="group border border-border bg-card/50 backdrop-blur-md rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <ul className="text-muted-foreground text-left list-disc list-inside space-y-2">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section id="services" className="py-20 px-4 bg-muted/30">
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
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
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
      </section>

      {/* Competitive Advantages */}
      <section id="avantages" className="py-20 px-4">
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
                icon: <Shield className="h-8 w-8 text-accent" />,
                title: "Service Premium",
                desc: "Engagement prospects quand la concurrence dort. Disponibilité 24/7 pour ne jamais manquer une opportunité.",
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-accent" />,
                title: "Données Stratégiques",
                desc: "Insights comportementaux pour cibler précisément. Analytics avancés pour optimiser vos stratégies.",
              },
              {
                icon: <Users className="h-8 w-8 text-accent" />,
                title: "Image Professionnelle",
                desc: "Expérience client cohérente et haut de gamme. Renforcez votre crédibilité à chaque interaction.",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border bg-card/60 backdrop-blur-md rounded-xl"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
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
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-accent/10"></div>
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
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      type="email"
                      placeholder="Votre email professionnel"
                      className="h-12 text-lg"
                    />
                    <Input
                      type="tel"
                      placeholder="Votre numéro de téléphone"
                      className="h-12 text-lg"
                    />
                  </div>
                  <Button
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
      </section>
    </div>
  );
}
