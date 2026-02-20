import React from "react";
import Image from "next/image";

export default function ServiceSignatureSection() {
  return (
    <section className="bg-card-dark/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-black">Service Signature</h2>
          <p className="text-primary mx-auto max-w-2xl text-2xl font-bold">
            "Vous arrivez. Nous nous occupons du reste."
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="bg-card hover:border-primary/40 group relative overflow-hidden rounded-2xl border border-white/5 transition-all duration-300">
            <div className="relative h-80 w-full overflow-hidden">
              <Image
                src="/welcome_img.jpg"
                alt="Accueil Aéroport"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-8">
              <h3 className="mb-2 text-2xl font-bold">Accueil Aéroport</h3>
              <p className="text-muted-foreground">
                Service VIP dès votre arrivée. Prise en charge complète à
                l'aéroport pour un début de séjour sans stress.
              </p>
            </div>
          </div>

          <div className="bg-card hover:border-primary/40 group relative overflow-hidden rounded-2xl border border-white/5 transition-all duration-300">
            <div className="relative h-80 w-full overflow-hidden">
              <Image
                src="/assistance_img.jpg"
                alt="Accompagnement Personnalisé"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-8">
              <h3 className="mb-2 text-2xl font-bold">
                Accompagnement Personnalisé
              </h3>
              <p className="text-muted-foreground">
                Un expert dédié vous accompagne dans toutes vos démarches, de A
                à Z, pour une installation réussie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
