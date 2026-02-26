"use client";
import React from "react";
import {
  BriefcaseBusiness,
  Car,
  HeartPulse,
  Home,
  Landmark,
  PiggyBank,
  Sparkles,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function PremiumServicesSection() {
  const router = useRouter();
  const { t } = useTranslation();
  const baseCardClassName =
    "glass-card relative overflow-hidden rounded-2xl transition-all duration-300 will-change-transform cursor-pointer";
  const hoverCardClassName = "hover:-translate-y-0.5";
  const borderClassName = "ring-1 ring-border/60";
  const highlightClassName =
    "before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(80%_60%_at_50%_0%,hsl(var(--ring)/0.22)_0%,transparent_70%)] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100";

  return (
    <section id="services" className="bg-card-dark/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              {t("premiumServices.title")}
            </h2>
            <p className="text-slate-400">{t("premiumServices.description")}</p>
          </div>

          <button
            type="button"
            onClick={() => {
              router.push("/services");
            }}
            className="text-primary cursor-pointer flex items-center gap-2 font-bold hover:underline"
          >
            {t("premiumServices.allServices")}
            <span aria-hidden>›</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
          <div
            className={`${baseCardClassName} ${hoverCardClassName} ${borderClassName} ${highlightClassName} col-span-2 row-span-2 flex flex-col justify-between p-8`}
          >
            <div>
              <Home className="text-primary mb-6 size-10" />
              <h3 className="mb-2 text-xl font-bold">
                {t("premiumServices.installation")}
              </h3>
              <p className="text-sm text-slate-400">
                {t("premiumServices.installationDesc")}
              </p>
            </div>
            <button
              type="button"
              className="text-primary mt-8 text-sm font-bold"
            >
              {t("premiumServices.learnMore")}
            </button>
          </div>

          <div
            className={`${baseCardClassName} ${hoverCardClassName} ${borderClassName} ${highlightClassName} flex flex-col items-center p-6 text-center`}
          >
            <Landmark className="text-primary mb-4 size-8" />
            <h3 className="text-sm font-bold">{t("premiumServices.bank")}</h3>
          </div>

          <div
            className={`${baseCardClassName} ${hoverCardClassName} ${borderClassName} ${highlightClassName} flex flex-col items-center p-6 text-center`}
          >
            <Car className="text-primary mb-4 size-8" />
            <h3 className="text-sm font-bold">
              {t("premiumServices.mobility")}
            </h3>
          </div>

          <div
            className={`${baseCardClassName} ${hoverCardClassName} ${borderClassName} ${highlightClassName} flex flex-col items-center p-6 text-center`}
          >
            <HeartPulse className="text-primary mb-4 size-8" />
            <h3 className="text-sm font-bold">{t("premiumServices.health")}</h3>
          </div>

          <div
            className={`${baseCardClassName} ${hoverCardClassName} ${borderClassName} ${highlightClassName} col-span-2 flex items-center gap-6 p-6`}
          >
            <BriefcaseBusiness className="text-primary size-10" />
            <div>
              <h3 className="text-sm font-bold">
                {t("premiumServices.businessLegal")}
              </h3>
              <p className="text-xs text-slate-400">
                {t("premiumServices.businessLegalDesc")}
              </p>
            </div>
          </div>

          <div
            className={`${baseCardClassName} ${hoverCardClassName} ${borderClassName} ${highlightClassName} flex flex-col items-center p-6 text-center`}
          >
            <Sparkles className="text-primary mb-4 size-8" />
            <h3 className="text-sm font-bold">
              {t("premiumServices.nextgen")}
            </h3>
          </div>

          <div
            className={`${baseCardClassName} ${hoverCardClassName} ${borderClassName} ${highlightClassName} flex flex-col items-center p-6 text-center`}
          >
            <User className="text-primary mb-4 size-8" />
            <h3 className="text-sm font-bold">
              {t("premiumServices.retirement")}
            </h3>
          </div>

          <div
            className={`${baseCardClassName} ${hoverCardClassName} ${borderClassName} ${highlightClassName} col-span-3 flex items-center gap-6 p-6`}
          >
            <PiggyBank className="text-primary size-10" />
            <div>
              <h3 className="text-accent-gold text-sm font-bold">
                {t("premiumServices.savings")}
              </h3>
              <p className="text-xs text-slate-400">
                {t("premiumServices.savingsDesc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
