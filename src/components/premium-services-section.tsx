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

export default function PremiumServicesSection() {
  const router = useRouter();
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
            <h2 className="mb-4 text-3xl font-bold">Nos Services Premium</h2>
            <p className="text-slate-400">
              Une expertise 360° pour votre nouvelle vie.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              router.push("/services");
            }}
            className="text-primary cursor-pointer flex items-center gap-2 font-bold hover:underline"
          >
            Tous les services
            <span aria-hidden>›</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
          <div
            className={`${baseCardClassName} ${hoverCardClassName} ${borderClassName} ${highlightClassName} col-span-2 row-span-2 flex flex-col justify-between p-8`}
          >
            <div>
              <Home className="text-primary mb-6 size-10" />
              <h3 className="mb-2 text-xl font-bold">Installation</h3>
              <p className="text-sm text-slate-400">
                Recherche de logement, déménagement international et
                conciergerie.
              </p>
            </div>
            <button
              type="button"
              className="text-primary mt-8 text-sm font-bold"
            >
              En savoir plus
            </button>
          </div>

          <div
            className={`${baseCardClassName} ${hoverCardClassName} ${borderClassName} ${highlightClassName} flex flex-col items-center p-6 text-center`}
          >
            <Landmark className="text-primary mb-4 size-8" />
            <h3 className="text-sm font-bold">Banque</h3>
          </div>

          <div
            className={`${baseCardClassName} ${hoverCardClassName} ${borderClassName} ${highlightClassName} flex flex-col items-center p-6 text-center`}
          >
            <Car className="text-primary mb-4 size-8" />
            <h3 className="text-sm font-bold">Mobilité</h3>
          </div>

          <div
            className={`${baseCardClassName} ${hoverCardClassName} ${borderClassName} ${highlightClassName} flex flex-col items-center p-6 text-center`}
          >
            <HeartPulse className="text-primary mb-4 size-8" />
            <h3 className="text-sm font-bold">Santé</h3>
          </div>

          <div
            className={`${baseCardClassName} ${hoverCardClassName} ${borderClassName} ${highlightClassName} col-span-2 flex items-center gap-6 p-6`}
          >
            <BriefcaseBusiness className="text-primary size-10" />
            <div>
              <h3 className="text-sm font-bold">Business &amp; Legal</h3>
              <p className="text-xs text-slate-400">
                Accompagnement administratif.
              </p>
            </div>
          </div>

          <div
            className={`${baseCardClassName} ${hoverCardClassName} ${borderClassName} ${highlightClassName} flex flex-col items-center p-6 text-center`}
          >
            <Sparkles className="text-primary mb-4 size-8" />
            <h3 className="text-sm font-bold">Lifestyle</h3>
          </div>

          <div
            className={`${baseCardClassName} ${hoverCardClassName} ${borderClassName} ${highlightClassName} flex flex-col items-center p-6 text-center`}
          >
            <User className="text-primary mb-4 size-8" />
            <h3 className="text-sm font-bold">Retraite</h3>
          </div>

          <div
            className={`${baseCardClassName} ${hoverCardClassName} ${borderClassName} ${highlightClassName} col-span-3 flex items-center gap-6 p-6`}
          >
            <PiggyBank className="text-primary size-10" />
            <div>
              <h3 className="text-accent-gold text-sm font-bold">
                Stratégies d&apos;épargne
              </h3>
              <p className="text-xs text-slate-400">
                Optimisez vos rendements en RDC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
