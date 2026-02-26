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
} from "lucide-react";
import CallToAction from "@/components/call-to-action";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();

  const stats = [
    { value: "50+", label: t("aboutPage.stats.partners"), icon: Handshake },
    { value: "300+", label: t("aboutPage.stats.housing"), icon: Home },
    { value: "1000+", label: t("aboutPage.stats.people"), icon: Users },
    { value: "∞", label: t("aboutPage.stats.community"), icon: Globe },
  ];

  const values = [
    {
      icon: Shield,
      title: t("aboutPage.values.secure.title"),
      description: t("aboutPage.values.secure.description"),
    },
    {
      icon: Target,
      title: t("aboutPage.values.structure.title"),
      description: t("aboutPage.values.structure.description"),
    },
    {
      icon: Heart,
      title: t("aboutPage.values.support.title"),
      description: t("aboutPage.values.support.description"),
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-secondary py-28 text-white md:py-36">
        <div className="container mx-auto max-w-5xl px-6 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            {t("aboutPage.heroLabel")}
          </p>
          <h1 className="mb-8 font-[batangas] text-5xl font-bold md:text-7xl">
            {t("aboutPage.heroTitle")}{" "}
            <span className="text-primary">
              {t("aboutPage.heroTitleHighlight")}
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
            {t("aboutPage.heroDesc")}
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-2xl font-semibold leading-relaxed md:text-3xl">
            {t("aboutPage.heroStatement")}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                {t("aboutPage.whoWeAre")}
              </p>
              <h2 className="mb-6 text-3xl font-bold text-[#454F80] md:text-4xl">
                {t("aboutPage.dualExpertise")} <br />
                <span className="text-primary">{t("aboutPage.unique")}</span>
              </h2>
              <p
                className="mb-6 text-lg leading-relaxed text-[#454F80]/70"
                dangerouslySetInnerHTML={{
                  __html: t("aboutPage.whoWeAreDesc1"),
                }}
              />
              <p
                className="text-lg leading-relaxed text-[#454F80]/70"
                dangerouslySetInnerHTML={{
                  __html: t("aboutPage.whoWeAreDesc2"),
                }}
              />
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-[#454F80]/10 bg-slate-50 p-6">
                  <Globe className="mb-3 size-8 text-primary" />
                  <p className="text-lg font-bold text-[#454F80]">
                    {t("aboutPage.outside")}
                  </p>
                  <p className="mt-1 text-sm text-[#454F80]/60">
                    {t("aboutPage.outsideDesc")}
                  </p>
                </div>
                <div className="rounded-2xl border border-[#454F80]/10 bg-slate-50 p-6">
                  <Home className="mb-3 size-8 text-primary" />
                  <p className="text-lg font-bold text-[#454F80]">
                    {t("aboutPage.ground")}
                  </p>
                  <p className="mt-1 text-sm text-[#454F80]/60">
                    {t("aboutPage.groundDesc")}
                  </p>
                </div>
                <div className="col-span-2 rounded-2xl border border-primary/20 bg-primary/5 p-6">
                  <p className="text-center text-lg font-bold text-[#454F80]">
                    <span className="text-primary">Bridge</span>{" "}
                    {t("aboutPage.bridgeBetween")}
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
            {t("aboutPage.statsLabel")}
          </p>
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            {t("aboutPage.statsTitle")}
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
              {t("aboutPage.missionLabel")}
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[#454F80] md:text-4xl">
              {t("aboutPage.missionTitle")}
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

      <CallToAction />
    </div>
  );
}
