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
import { useTranslation } from "react-i18next";

export default function ServicesPage() {
  const { t } = useTranslation();

  const services = [
    {
      id: "installation",
      number: "01",
      title: t("servicesPage.services.installation.title"),
      description: t("servicesPage.services.installation.description"),
      icon: Home,
      image: "/installation.png",
      features: t("servicesPage.services.installation.features", {
        returnObjects: true,
      }) as string[],
    },
    {
      id: "banque",
      number: "02",
      title: t("servicesPage.services.banque.title"),
      description: t("servicesPage.services.banque.description"),
      icon: Landmark,
      image: "/fin_advices.jpg",
      features: t("servicesPage.services.banque.features", {
        returnObjects: true,
      }) as string[],
      note: t("servicesPage.services.banque.note"),
    },
    {
      id: "mobilite",
      number: "03",
      title: t("servicesPage.services.mobilite.title"),
      description: t("servicesPage.services.mobilite.description"),
      icon: Plane,
      image: "/welcome_img.jpg",
      features: t("servicesPage.services.mobilite.features", {
        returnObjects: true,
      }) as string[],
      highlight: t("servicesPage.services.mobilite.highlight"),
    },
    {
      id: "sante",
      number: "04",
      title: t("servicesPage.services.sante.title"),
      description: t("servicesPage.services.sante.description"),
      icon: HeartPulse,
      image: "/health-insurance.png",
      features: t("servicesPage.services.sante.features", {
        returnObjects: true,
      }) as string[],
    },
    {
      id: "business",
      number: "05",
      title: t("servicesPage.services.business.title"),
      description: t("servicesPage.services.business.description"),
      icon: Briefcase,
      image: "/net_events.jpg",
      features: t("servicesPage.services.business.features", {
        returnObjects: true,
      }) as string[],
    },
    {
      id: "lifestyle",
      number: "06",
      title: t("servicesPage.services.lifestyle.title"),
      description: t("servicesPage.services.lifestyle.description"),
      icon: Sparkles,
      image: "/lifestyle.png",
      features: t("servicesPage.services.lifestyle.features", {
        returnObjects: true,
      }) as string[],
    },
    {
      id: "retraite",
      number: "07",
      title: t("servicesPage.services.retraite.title"),
      description: t("servicesPage.services.retraite.description"),
      icon: Clock,
      image: "/retraite.png",
      features: t("servicesPage.services.retraite.features", {
        returnObjects: true,
      }) as string[],
    },
    {
      id: "nextgen",
      number: "08",
      title: t("servicesPage.services.nextgen.title"),
      description: t("servicesPage.services.nextgen.description"),
      icon: Clock,
      image: "/group_workstation.jpg",
      features: t("servicesPage.services.nextgen.features", {
        returnObjects: true,
      }) as string[],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-secondary py-28 text-white md:py-36">
        <div className="container relative mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              {t("servicesPage.heroLabel")}
            </p>
            <h1 className="mb-8 font-[batangas] text-5xl font-bold md:text-7xl lg:text-8xl">
              {t("servicesPage.heroTitle")}{" "}
              <span className="text-primary">
                {t("servicesPage.heroTitleHighlight")}
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
              {t("servicesPage.heroDesc")}
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
                                {t("servicesPage.signatureService")}
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
