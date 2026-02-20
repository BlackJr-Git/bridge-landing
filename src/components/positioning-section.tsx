import React from "react";
import { Users, Plane, TrendingUp, Heart } from "lucide-react";

export default function PositioningSection() {
  const profiles = [
    { icon: Users, label: "Diaspora" },
    { icon: Plane, label: "Expatriés" },
    { icon: TrendingUp, label: "Investisseurs" },
    { icon: Heart, label: "Retraités" },
  ];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <h2 className="text-4xl font-black">Bridge, c'est quoi ?</h2>
          </div>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
            Bridge est le premier guichet d'accompagnement global pour :
          </p>
        </div>

        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <div
                key={index}
                className="bg-card hover:border-primary/40 group relative overflow-hidden rounded-2xl border border-white/5 p-8 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 flex items-center justify-center">
                  <div className="bg-primary/10 text-primary rounded-full p-4">
                    <Icon className="size-8" />
                  </div>
                </div>
                <h3 className="text-center text-xl font-bold">
                  {profile.label}
                </h3>
              </div>
            );
          })}
        </div>

        <div className="bg-primary/5 border-primary/20 rounded-2xl border p-8 text-center">
          <p className="text-xl font-bold">
            Une seule porte d'entrée pour tous vos besoins.
          </p>
        </div>
      </div>
    </section>
  );
}
