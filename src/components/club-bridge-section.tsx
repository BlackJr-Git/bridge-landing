import React from "react";
import {
  Users,
  MessageSquare,
  MapPin,
  GraduationCap,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ClubBridgeSection() {
  const activities = [
    {
      icon: Users,
      title: "Networking privé",
      description: "Rencontres exclusives entre membres de la communauté",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: MessageSquare,
      title: "Tables action",
      description: "Sessions de travail collaboratif et échange d'idées",
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      icon: MapPin,
      title: "Visites terrain",
      description: "Découverte d'opportunités et de projets concrets",
      color: "from-green-500/20 to-blue-500/20",
    },
    {
      icon: GraduationCap,
      title: "Coaching installation",
      description: "Accompagnement personnalisé pour votre installation",
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      icon: TrendingUp,
      title: "Éducation financière",
      description: "Formation sur l'investissement et la gestion financière",
      color: "from-yellow-500/20 to-orange-500/20",
    },
    {
      icon: Sparkles,
      title: "Soirées communauté",
      description: "Événements conviviaux pour tisser des liens durables",
      color: "from-pink-500/20 to-purple-500/20",
    },
  ];

  return (
    <section className="bg-background py-24 " id="club">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            {/* <span className="text-4xl">🟣</span> */}
            <h2 className="text-4xl font-black">Club Bridge</h2>
          </div>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
            Communauté exclusive avec événements mensuels, networking diaspora
            et accès prioritaire aux opportunités
          </p>
        </div>

        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div
                key={index}
                className="bg-card hover:border-primary/40 group relative overflow-hidden rounded-2xl border border-white/5 p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`bg-linear-to-br ${activity.color} absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div className="relative">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="bg-primary/10 text-primary rounded-full p-3">
                      <Icon className="size-6" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-center text-lg font-bold">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground text-center text-sm">
                    {activity.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className="bg-primary/5 border-primary/20 rounded-2xl border p-8 text-center">
          <p className="mb-6 text-xl font-bold">
            👉 Présenter les 6 activités mensuelles
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="font-bold">
              Rejoindre le Club Bridge
            </Button>
            <Button size="lg" variant="outline" className="font-bold">
              En savoir plus
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
