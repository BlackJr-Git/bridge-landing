import React from "react";
import { Calendar, Ghost } from "lucide-react";
import { Button } from "./ui/button";

export default function InvestmentEventSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
        <div className="glass-card flex flex-col justify-between rounded-3xl border  p-10">
          <div>
            <h3 className="mb-4 text-2xl font-bold">
              Comprendre avant d'investir
            </h3>
            <p className="mb-6 text-slate-400">
              Coût de la vie RDC | Dépenser intelligemment | Stratégies
              d'épargne
            </p>
          </div>
          <div>
            <Button
              variant="outline"
              type="button"
              className="rounded-lg py-2 font-bold w-fit"
            >
              Découvrir le guide
            </Button>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground flex flex-col justify-between rounded-3xl p-10">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Calendar className="size-5 font-bold" />
              <span className="text-xs font-black uppercase tracking-widest">
                Événement Exceptionnel
              </span>
            </div>
            <h3 className="mb-4 text-3xl font-black">
              NGUNDA — La Foire Diaspora &amp; Expat
            </h3>
            <p className="mb-6 font-medium opacity-90">
              Le plus grand rassemblement annuel pour les futurs acteurs du
              développement de la RDC.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold">Kinshasa | Octobre 2026</span>
            {/* <button
              type="button"
              className="bg-secondary text-secondary-foreground rounded-lg px-6 py-2 font-bold"
            >
              Réserver
            </button> */}
            <Button className="bg-[#002868] hover:bg-[#002868]/80 cursor-pointer text-secondary-foreground rounded-lg px-6 py-2 font-bold">
              Réserver
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
