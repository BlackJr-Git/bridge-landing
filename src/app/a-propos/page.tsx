"use client";

import React from "react";
import { Users, Home, Handshake, Globe, Shield, Target, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

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
    description: "Des partenaires vérifiés, des processus transparents, et un accompagnement de confiance.",
  },
  {
    icon: Target,
    title: "Vous structurer",
    description: "Une méthodologie éprouvée pour transformer vos projets en réalisations concrètes.",
  },
  {
    icon: Heart,
    title: "Vous accompagner",
    description: "Une présence humaine à chaque étape, de la préparation à l'installation.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br bg-secondary py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-[url('/assets/pattern.png')] opacity-5" />
        <div className="container relative mx-auto max-w-5xl px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            À propos de <span className="text-[#EF4F67]">Bridge</span>
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-white/90 md:text-2xl">
            Bridge est né d'un constat simple :
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-2xl font-semibold leading-relaxed md:text-3xl">
            Revenir, investir ou s'installer au pays ne devrait pas être un parcours d'obstacles.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#454F80] md:text-4xl">
                Qui sommes-nous ?
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-[#454F80]/80">
                Nous sommes un <strong className="text-[#EF4F67]">regroupement puissant</strong> de membres 
                de la diaspora et d'acteurs locaux engagés, qui ont décidé de transformer les difficultés 
                en opportunités.
              </p>
              <p className="text-lg leading-relaxed text-[#454F80]/80">
                Parce que nous connaissons <strong>les deux réalités</strong> : celle de l'extérieur… 
                et celle du terrain.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-[#EF4F67]/10 to-[#454F80]/10 p-8">
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <Globe className="mb-4 h-20 w-20 text-[#EF4F67]" />
                  <p className="text-xl font-semibold text-[#454F80]">
                    L'extérieur + Le terrain
                  </p>
                  <p className="mt-2 text-[#454F80]/70">
                    Une double expertise unique
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-[#454F80] md:text-4xl">
            Aujourd'hui, Bridge c'est :
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-[#454F80]/70">
            Des chiffres qui témoignent de notre engagement
          </p>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl bg-white p-8 text-center shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#EF4F67]/10 transition-colors group-hover:bg-[#EF4F67]/20">
                    <Icon className="h-8 w-8 text-[#EF4F67]" />
                  </div>
                  <p className="mb-2 text-4xl font-bold text-[#454F80]">{stat.value}</p>
                  <p className="text-sm text-[#454F80]/70">{stat.label}</p>
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
            <h2 className="mb-4 text-3xl font-bold text-[#454F80] md:text-4xl">
              Notre mission est simple :
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border-2 border-transparent bg-gradient-to-br from-slate-50 to-white p-8 transition-all hover:border-[#EF4F67]/20 hover:shadow-lg"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#EF4F67] text-white shadow-lg shadow-[#EF4F67]/30">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#454F80]">{value.title}</h3>
                  <p className="text-[#454F80]/70">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br bg-secondary py-20 text-white md:py-28">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Avec <span className="text-[#EF4F67]">Bridge</span>, vous ne revenez plus seul.
          </h2>
          
          <div className="mb-10 space-y-3 text-xl text-white/90">
            <p>Vous revenez <strong className="text-white">préparé</strong>.</p>
            <p>Vous investissez en <strong className="text-white">confiance</strong>.</p>
            <p>Vous construisez avec <strong className="text-white">sérénité</strong>.</p>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#EF4F67] px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-[#d94459] hover:shadow-lg"
            >
              Nous contacter
            </a>
            <a
              href="/#services"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-white hover:bg-white/10"
            >
              Découvrir nos services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
