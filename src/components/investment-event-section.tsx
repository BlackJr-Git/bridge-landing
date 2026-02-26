"use client";

import React from "react";
import { Calendar, Ghost } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

export default function InvestmentEventSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
        <div className="glass-card flex flex-col justify-between rounded-3xl border  p-10">
          <div>
            <h3 className="mb-4 text-2xl font-bold">
              {t("investmentEvent.understandTitle")}
            </h3>
            <p className="mb-6 text-slate-400">
              {t("investmentEvent.understandDesc")}
            </p>
          </div>
          <div>
            <Button
              // variant="outline"
              type="button"
              className="rounded-lg py-2 font-bold w-fit"
            >
              {t("investmentEvent.contactAdvisor")}
            </Button>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground flex flex-col justify-between rounded-3xl p-10">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Calendar className="size-5 font-bold" />
              <span className="text-xs font-black uppercase tracking-widest">
                {t("investmentEvent.eventLabel")}
              </span>
            </div>
            <h3 className="mb-4 text-3xl font-black">
              {t("investmentEvent.eventTitle")} <br />{" "}
              {t("investmentEvent.eventSubtitle")}
            </h3>
            <p className="mb-6 font-medium opacity-90">
              {t("investmentEvent.eventDesc")}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold">
              {t("investmentEvent.eventLocation")}
            </span>
            {/* <button
              type="button"
              className="bg-secondary text-secondary-foreground rounded-lg px-6 py-2 font-bold"
            >
              Réserver
            </button> */}
            <Button className="bg-[#002868] hover:bg-[#002868]/80 cursor-pointer text-secondary-foreground rounded-lg px-6 py-2 font-bold">
              {t("investmentEvent.reserve")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
