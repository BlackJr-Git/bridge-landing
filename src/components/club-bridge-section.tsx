"use client";

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
import Image from "next/image";

export default function ClubBridgeSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const activities = [
    {
      icon: Users,
      title: "Networking privé",
      description: "Rencontres exclusives entre membres de la communauté",
      image: "/net_events.jpg",
    },
    {
      icon: MessageSquare,
      title: "Tables action",
      description: "Sessions de travail collaboratif et échange d'idées",
      image: "/group_workstation.jpg",
    },
    {
      icon: MapPin,
      title: "Visites terrain",
      description: "Découverte d'opportunités et de projets concrets",
      image: "/ground_visit.jpg",
    },
    {
      icon: GraduationCap,
      title: "Coaching installation",
      description: "Accompagnement personnalisé pour votre installation",
      image: "/relocation_ast.jpg",
    },
    {
      icon: TrendingUp,
      title: "Éducation financière",
      description: "Formation sur l'investissement et la gestion financière",
      image: "/fin_advices.jpg",
    },
    {
      icon: Sparkles,
      title: "Soirées communauté",
      description: "Événements conviviaux pour tisser des liens durables",
      image: "/community_events.jpg",
    },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % activities.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [activities.length]);

  return (
    <section className="bg-background py-24" id="club">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <h2 className="text-4xl font-black">Bridge Club</h2>
          </div>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
            Communauté exclusive avec événements mensuels, networking diaspora
            et accès prioritaire aux opportunités
          </p>
        </div>

        <div className="mb-12 grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            {/* <div className="flex justify-center gap-2">
              {activities.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/50 w-2 hover:bg-muted-foreground/80"
                  }`}
                  aria-label={`Aller à l'activité ${index + 1}`}
                />
              ))}
            </div> */}

            <div className="relative h-full min-h-[600px] overflow-hidden rounded-2xl">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="mb-2 text-3xl font-bold text-white">
                      {activity.title}
                    </h3>
                    <p className="text-lg text-white/90">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2">
              {activities.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/50 w-2 hover:bg-muted-foreground/80"
                  }`}
                  aria-label={`Aller à l'activité ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`bg-card group relative overflow-hidden rounded-xl border p-6 text-left transition-all duration-300 hover:-translate-y-0.5 ${
                    index === activeIndex
                      ? "border-primary shadow-lg shadow-primary/20"
                      : "border-white/5 hover:border-primary/40"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`rounded-full p-3 transition-colors ${
                        index === activeIndex
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      <Icon className="size-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1 text-lg font-bold">
                        {activity.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-primary border-primary/20 rounded-2xl border p-8 text-center">
          <p className="mb-6 text-xl font-bold text-primary-foreground">
            Rejoignez notre communauté exclusive
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="font-bold bg-secondary">
              Rejoindre le Club Bridge
            </Button>
            {/* <Button size="lg" variant="outline" className="font-bold">
              En savoir plus
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
