"use client";

import React from "react";
import {
  Users,
  Home,
  Handshake,
  Globe,
  Shield,
  Target,
  Heart,
  ArrowRight,
} from "lucide-react";

const stats = [
  {
    value: "50+",
    label: "Partenaires vérifiés et fiables",
    icon: Handshake,
  },
  {
    value: "300+",
    label: "Logements sécurisés",
    icon: Home,
  },
  {
    value: "1000+",
    label: "Personnes accompagnées",
    icon: Users,
  },
  {
    value: "∞",
    label: "Communauté forte diaspora & locaux",
    icon: Globe,
  },
];

const values = [
  {
    icon: Shield,
    title: "Vous sécuriser",
    description:
      "Des partenaires vérifiés, des processus transparents, et un accompagnement de confiance.",
  },
  {
    icon: Target,
    title: "Vous structurer",
    description:
      "Une méthodologie éprouvée pour transformer vos projets en réalisations concrètes.",
  },
  {
    icon: Heart,
    title: "Vous accompagner",
    description:
      "Une présence humaine à chaque étape, de la préparation à l'installation.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-secondary py-28 text-white md:py-36">
        <div className="container mx-auto max-w-5xl px-6 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Notre histoire
          </p>
          <h1 className="mb-8 font-[batangas] text-5xl font-bold md:text-7xl">
            À propos de <span className="text-primary">Bridge</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
            Bridge est né d'un constat simple :
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-2xl font-semibold leading-relaxed md:text-3xl">
            Revenir, investir ou s'installer au pays ne devrait pas être un
            parcours d'obstacles.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                Qui sommes-nous
              </p>
              <h2 className="mb-6 text-3xl font-bold text-[#454F80] md:text-4xl">
                Une double expertise <br />
                <span className="text-primary">unique</span>
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-[#454F80]/70">
                Nous sommes un{" "}
                <strong className="text-[#454F80]">
                  regroupement puissant
                </strong>{" "}
                de membres de la diaspora et d'acteurs locaux engagés, qui ont
                décidé de transformer les difficultés en opportunités.
              </p>
              <p className="text-lg leading-relaxed text-[#454F80]/70">
                Parce que nous connaissons{" "}
                <strong className="text-[#454F80]">les deux réalités</strong> :
                celle de l'extérieur… et celle du terrain.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-[#454F80]/10 bg-slate-50 p-6">
                  <Globe className="mb-3 size-8 text-primary" />
                  <p className="text-lg font-bold text-[#454F80]">
                    L'extérieur
                  </p>
                  <p className="mt-1 text-sm text-[#454F80]/60">
                    La réalité de la diaspora, ses défis et ses ambitions
                  </p>
                </div>
                <div className="rounded-2xl border border-[#454F80]/10 bg-slate-50 p-6">
                  <Home className="mb-3 size-8 text-primary" />
                  <p className="text-lg font-bold text-[#454F80]">Le terrain</p>
                  <p className="mt-1 text-sm text-[#454F80]/60">
                    La connaissance locale, les partenaires, le réseau
                  </p>
                </div>
                <div className="col-span-2 rounded-2xl border border-primary/20 bg-primary/5 p-6">
                  <p className="text-center text-lg font-bold text-[#454F80]">
                    <span className="text-primary">Bridge</span> = Le pont entre
                    les deux
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary py-20 text-white md:py-28">
        <div className="container mx-auto max-w-6xl px-6">
          <p className="mb-3 text-center text-sm font-medium uppercase tracking-widest text-primary">
            Nos chiffres
          </p>
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Aujourd'hui, Bridge c'est :
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition-all hover:border-primary/30 hover:bg-white/10"
                >
                  <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                    <Icon className="size-7 text-primary" />
                  </div>
                  <p className="mb-2 text-4xl font-bold">{stat.value}</p>
                  <p className="text-sm text-white/60">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Ce qui nous guide
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[#454F80] md:text-4xl">
              Notre mission est simple
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-[#454F80]/10 bg-white p-8 transition-all hover:border-primary/20 hover:shadow-lg"
                >
                  <div className="mb-6 flex size-14 items-center justify-center rounded-xl bg-primary text-white">
                    <Icon className="size-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#454F80]">
                    {value.title}
                  </h3>
                  <p className="text-[#454F80]/60 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-8 text-3xl font-bold text-[#454F80] md:text-4xl">
            Avec <span className="text-primary">Bridge</span>, vous ne revenez
            plus seul.
          </h2>

          <div className="mb-10 space-y-2 text-xl text-[#454F80]/70">
            <p>
              Vous revenez <strong className="text-[#454F80]">préparé</strong>.
            </p>
            <p>
              Vous investissez en{" "}
              <strong className="text-[#454F80]">confiance</strong>.
            </p>
            <p>
              Vous construisez avec{" "}
              <strong className="text-[#454F80]">sérénité</strong>.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-[#d94459] hover:shadow-lg"
            >
              Nous contacter
              <ArrowRight className="size-5" />
            </a>
            <a
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#454F80]/20 px-8 py-4 text-lg font-semibold text-[#454F80] transition-all hover:border-[#454F80]/40 hover:bg-[#454F80]/5"
            >
              Découvrir nos services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
