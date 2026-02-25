"use client";

import React from "react";
import Image from "next/image";
import {
  Home,
  Landmark,
  Plane,
  HeartPulse,
  Briefcase,
  Sparkles,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import CallToAction from "@/components/call-to-action";

const services = [
  {
    id: "installation",
    number: "01",
    title: "Installation & Vie",
    description:
      "Un accompagnement complet pour votre installation et votre adaptation au quotidien.",
    icon: Home,
    image: "/installation.png",
    features: [
      "Installation administrative",
      "Recherche logement",
      "Orientation quotidienne",
      "Coach de vie / adaptation retour",
      "Accompagnement diaspora & expat",
    ],
  },
  {
    id: "banque",
    number: "02",
    title: "Banque & Assurance",
    description:
      "Bridge est votre facilitateur pour toutes vos démarches bancaires et d'assurance. Nous ne sommes pas une banque, mais votre pont vers les meilleures solutions.",
    icon: Landmark,
    image: "/fin_advices.jpg",
    features: [
      "Ouverture compte bancaire",
      "Crédit & Investissement",
      "Orientation solutions financières",
      "Assistance transfert d'argent",
      "Conseils assurance santé",
      "Assurance voyage",
      "Assurance habitation",
      "Assurance investissement",
    ],
    note: "Bridge = facilitateur, pas banque.",
  },
  {
    id: "mobilite",
    number: "03",
    title: "Mobilité & Voyage",
    description:
      "De la réservation de vos billets à votre prise en charge à l'aéroport, nous gérons toute votre mobilité.",
    icon: Plane,
    image: "/welcome_img.jpg",
    features: [
      "Billets d'avion",
      "Organisation court séjour",
      "Accueil & prise en charge aéroport",
      "Transport local",
    ],
    highlight: "Accueil & prise en charge aéroport",
  },
  {
    id: "sante",
    number: "04",
    title: "Santé & Assistance",
    description:
      "Votre santé est notre priorité. Accédez à un réseau médical fiable et à une assistance complète.",
    icon: HeartPulse,
    image: "/health-insurance.png",
    features: [
      "Orientation médicale",
      "Accès pharmacie",
      "Suivi santé",
      "Assistance hospitalière",
      "Assistance funéraire internationale",
    ],
  },
  {
    id: "business",
    number: "05",
    title: "Business & Investissement",
    description:
      "Transformez vos ambitions en projets concrets avec notre réseau de partenaires vérifiés.",
    icon: Briefcase,
    image: "/net_events.jpg",
    features: [
      "Opportunités business",
      "Networking diaspora",
      "Mise en relation partenaires",
      "Accompagnement entrepreneurial",
    ],
  },
  {
    id: "lifestyle",
    number: "06",
    title: "Lifestyle",
    description:
      "Profitez pleinement de votre séjour avec nos services de conciergerie et d'expériences locales.",
    icon: Sparkles,
    image: "/lifestyle.png",
    features: ["Restauration", "Conciergerie", "Expériences locales"],
  },
  {
    id: "retraite",
    number: "07",
    title: "Bridge NextGen",
    description:
      "Préparez sereinement votre retour et votre installation durable au pays.",
    icon: Clock,
    image: "/retraite.png",
    features: [
      "Préparation retraite RDC",
      "Installation longue durée",
      "Planification financière locale",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-secondary py-28 text-white md:py-36">
        <div className="container relative mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              Ce que nous faisons
            </p>
            <h1 className="mb-8 font-[batangas] text-5xl font-bold md:text-7xl lg:text-8xl">
              Nos <span className="text-primary">Services</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
              Une gamme complète de services pensés pour vous accompagner à
              chaque étape. Qualité, fiabilité et résultats.
            </p>
          </div>

          {/* Quick nav */}
          <div className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-white"
                >
                  <Icon className="size-4" />
                  {service.title}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <div className="divide-y divide-gray-100">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isReversed = index % 2 !== 0;

          return (
            <section
              key={service.id}
              id={service.id}
              className="py-20 md:py-28"
            >
              <div className="container mx-auto max-w-7xl px-6">
                <div
                  className={cn(
                    "grid items-center gap-12 md:grid-cols-2 md:gap-16",
                    isReversed && "md:[&>*:first-child]:order-2",
                  )}
                >
                  {/* Content */}
                  <div>
                    <div className="mb-6 flex items-center gap-4">
                      <span className="text-5xl font-bold text-primary/60 md:text-6xl">
                        {service.number}
                      </span>
                    </div>

                    <h2 className="mb-4 text-3xl font-bold text-secondary md:text-4xl">
                      {service.title}
                    </h2>

                    <p className="mb-8 text-secondary/80">
                      {service.description}
                    </p>

                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-[#454F80]"
                        >
                          <div
                            className={cn(
                              "size-1.5 rounded-full bg-[#454F80]/40",
                              service.highlight === feature &&
                                "size-2 bg-[#EF4F67]",
                            )}
                          />
                          <span
                            className={cn(
                              "text-sm",
                              service.highlight === feature &&
                                "font-semibold text-[#EF4F67]",
                            )}
                          >
                            {feature}
                            {service.highlight === feature && (
                              <span className="ml-2 inline-flex items-center rounded-full bg-[#EF4F67]/10 px-2 py-0.5 text-xs font-medium text-[#EF4F67]">
                                Service Signature
                              </span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {service.note && (
                      <p className="mt-6 rounded-lg border border-[#EF4F67]/20 bg-[#EF4F67]/5 px-4 py-3 text-sm italic text-[#454F80]/80">
                        {service.note}
                      </p>
                    )}
                  </div>

                  {/* Images */}
                  <div className="relative">
                    <div className="overflow-hidden rounded-2xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="h-[350px] w-full object-cover md:h-[420px]"
                      />
                    </div>
                    {/* Decorative element */}
                    <div
                      className={cn(
                        "absolute -z-10 size-32 rounded-2xl bg-[#EF4F67]/10",
                        isReversed ? "-bottom-4 -left-4" : "-bottom-4 -right-4",
                      )}
                    />
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CallToAction />
    </div>
  );
}
