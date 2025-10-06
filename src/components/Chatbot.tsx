import { Bot, Clock10, Sparkle, TrendingUp, Users } from "lucide-react";
import React from "react";
import { Card, CardContent } from "./ui/card";

const Chatbot = () => {
  return (
    <section
      id="chatbot-ia"
      className="py-20 px-4 w-full"
      // style={{
      //   backgroundImage: `url('/images/image-mesh-gradient-reverse.jpg')`,
      // }}
    >
      <div className="container mx-auto rounded-4xl px-24 py-24 ">
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
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Nurturing Personnalisé",
                points: [
                  "Séquences 90 Jours : Suivi automatique des prospects dans la durée",
                  "Alertes Ciblées : Notifications personnalisées selon les critères clients",
                  "Intégration CRM : Synchronisation complète des données et communications",
                ],
              },
              {
                icon: <Bot className="h-10 w-10 text-primary" />,
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
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
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
      </div>
    </section>
  );
};

export default Chatbot;
