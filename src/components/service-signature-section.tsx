"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function ServiceSignatureSection() {
  const { t } = useTranslation();

  const services = [
    {
      id: "mobilite",
      title: t("serviceSignature.services.mobilite.title"),
      image: "/welcome_img.png",
      features: t("serviceSignature.services.mobilite.features", {
        returnObjects: true,
      }) as string[],
      premium: {
        title: t("serviceSignature.services.mobilite.premiumTitle"),
        subtitle: t("serviceSignature.services.mobilite.premiumSubtitle"),
      },
      tagline: null,
      cta: t("serviceSignature.services.mobilite.cta"),
      ctaVariant: "default" as const,
    },
    {
      id: "finance",
      title: t("serviceSignature.services.finance.title"),
      titleSecondLine: t("serviceSignature.services.finance.titleSecondLine"),
      image: "/assistance_img.png",
      features: t("serviceSignature.services.finance.features", {
        returnObjects: true,
      }) as string[],
      premium: null,
      tagline: t("serviceSignature.services.finance.tagline"),
      cta: t("serviceSignature.services.finance.cta"),
      ctaVariant: "outline" as const,
    },
    {
      id: "nextgen",
      title: t("serviceSignature.services.nextgen.title"),
      image: "/group_workstation.png",
      features: t("serviceSignature.services.nextgen.features", {
        returnObjects: true,
      }) as string[],
      premium: null,
      tagline: t("serviceSignature.services.nextgen.tagline"),
      isQuote: true,
      cta: t("serviceSignature.services.nextgen.cta"),
      ctaVariant: "default" as const,
    },
    {
      id: "renaissance",
      title: t("serviceSignature.services.renaissance.title"),
      image: "/retraite.png",
      features: t("serviceSignature.services.renaissance.features", {
        returnObjects: true,
      }) as string[],
      premium: null,
      tagline: t("serviceSignature.services.renaissance.tagline"),
      cta: t("serviceSignature.services.renaissance.cta"),
      ctaVariant: "outline" as const,
    },
  ];

  return (
    <section className="bg-primary/10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-black md:text-5xl">
            <span className="font-[batangas] text-primary">
              {t("serviceSignature.title")}
            </span>{" "}
            <span className="text-secondary">
              {t("serviceSignature.titleSuffix")}
            </span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            {t("serviceSignature.description")}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                {/* Title */}
                <h3 className="mb-4 text-center text-lg font-bold">
                  <span className="text-primary">Bridge</span>{" "}
                  <span className="text-secondary">
                    {service.title.replace("Bridge ", "")}
                  </span>
                  {service.titleSecondLine && (
                    <>
                      <br />
                      <span className="text-secondary">
                        {service.titleSecondLine}
                      </span>
                    </>
                  )}
                </h3>

                {/* Features */}
                <ul className="mb-4 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Premium or Tagline */}
                <div className="mt-auto">
                  {service.premium && (
                    <div className="mb-4 border-t border-gray-100 pt-4">
                      <p className="text-center text-xs font-semibold uppercase tracking-wide text-gray-400">
                        {t("serviceSignature.or")}
                      </p>
                      <p className="mt-2 text-center text-sm font-bold text-primary">
                        {service.premium.title}
                      </p>
                      <p className="text-center text-xs text-gray-500">
                        {service.premium.subtitle}
                      </p>
                    </div>
                  )}

                  {service.tagline && (
                    <div className="mb-4 border-t border-gray-100 pt-4">
                      <p
                        className={`whitespace-pre-line text-center text-sm ${
                          service.isQuote
                            ? "italic text-primary"
                            : "text-gray-600"
                        }`}
                      >
                        {service.tagline}
                      </p>
                    </div>
                  )}

                  {/* CTA Button */}
                  <Button
                    variant={service.ctaVariant}
                    className={`w-full rounded-full ${
                      service.ctaVariant === "default"
                        ? "bg-primary hover:bg-primary/90"
                        : "border-secondary text-secondary hover:bg-secondary/10"
                    }`}
                  >
                    {service.cta}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
