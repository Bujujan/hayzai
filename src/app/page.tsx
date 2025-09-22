import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Target,
  TrendingUp,
  Zap,
  Users,
  BarChart3,
  Shield,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5"></div>
        <div className="container mx-auto relative z-10">
          <Badge className="mb-6 text-sm font-medium text-black bg-gray-200">
            Intelligence Artificielle • Conseil Business
          </Badge>
          <h1 className="text-5xl text-foreground md:text-7xl font-bold text-balance mb-6 leading-tight">
            Transformez Votre Business avec l&apos;
            <span className="text-accent">IA</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto leading-relaxed">
            Maximisez votre ROI, optimisez vos performances et prenez
            l&apos;avantage concurrentiel grâce à notre expertise en
            intelligence artificielle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact">
              <Button
                size="lg"
                className="text-lg px-8 py-6 group hover:cursor-pointer"
              >
                {/* Découvrir nos Solutions */}
                Consultation Gratuite
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>

            {/* <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-transparent"
            >
              Consultation Gratuite
            </Button> */}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-foreground md:text-5xl font-bold text-balance mb-6">
              ROI COMBINÉ - Impact Revenus
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Performance Commerciale optimisée par l&apos;Intelligence
              Artificielle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Réponse = Conversion
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Les leads contactés en minutes convertissent mieux. Réactivité
                  instantanée pour maximiser vos opportunités.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Montée en Charge Maîtrisée
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Gérez les pics d'activité sans recruter. Scalabilité
                  automatique pour une croissance sereine.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Focus sur la Vente</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Concentrez-vous sur la signature, pas la recherche.
                  Automatisation intelligente des tâches répétitives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section id="avantages" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-foreground md:text-5xl font-bold text-balance mb-6">
              Avantages Concurrentiels
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Prenez l&apos;avantage avec notre technologie de pointe
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <Shield className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Service Premium</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Engagement prospects quand la concurrence dort. Disponibilité
                  24/7 pour ne jamais manquer une opportunité.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <BarChart3 className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Données Stratégiques
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Insights comportementaux pour cibler précisément. Analytics
                  avancés pour optimiser vos stratégies.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Image Professionnelle
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Expérience client cohérente et haut de gamme. Renforcez votre
                  crédibilité à chaque interaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="valeurs" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-foreground md:text-5xl font-bold text-balance mb-6">
              Valeurs Fondamentales
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Les principes qui guident notre approche
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3">Excellence Continue</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Votre niveau de service, 24h/24
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-xl font-bold mb-3">Équilibre Parfait</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Performance ET bien-être
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-bold mb-3">Innovation Humaine</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  La tech qui amplifie votre talent
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-3">Partenariat Durable</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Votre succès = Notre succès
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-secondary/5 to-accent/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl text-foreground md:text-5xl font-bold text-balance mb-6">
              Prêt à Transformer Votre Business ?
            </h2>
            <p className="text-xl text-muted-foreground text-balance mb-12">
              Chaque prospect mérite votre excellence. Obtenez votre "Agent
              Personnel" IA pour développer sans limites et vendre sans stress.
            </p>

            <Card className="p-8 bg-card/80 backdrop-blur-sm border-0 shadow-xl">
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
                  <Button size="lg" className="w-full text-lg py-6 group">
                    Démarrer ma Transformation IA
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
