"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Combobox,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  useComboboxAnchor,
} from "@/components/ui/combobox";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";
import { HeroHeader } from "@/components/header";
import { useTranslation } from "react-i18next";

export default function ContactPage() {
  const [selectedProfiles, setSelectedProfiles] = React.useState<string[]>([]);
  const [selectedServices, setSelectedServices] = React.useState<string[]>([]);
  const anchor = useComboboxAnchor();
  const servicesAnchor = useComboboxAnchor();
  const { t } = useTranslation();

  const profiles = [
    { value: "diaspora", label: t("contactPage.profiles.diaspora") },
    { value: "expat", label: t("contactPage.profiles.expat") },
    { value: "investisseur", label: t("contactPage.profiles.investor") },
    { value: "nextgen", label: t("contactPage.profiles.nextgen") },
    { value: "retraite", label: t("contactPage.profiles.retiree") },
    { value: "autre", label: t("contactPage.profiles.other") },
  ];

  const services = [
    {
      value: "installation",
      label: t("contactPage.servicesList.installation"),
    },
    { value: "banque", label: t("contactPage.servicesList.banque") },
    { value: "mobilite", label: t("contactPage.servicesList.mobilite") },
    { value: "sante", label: t("contactPage.servicesList.sante") },
    { value: "business", label: t("contactPage.servicesList.business") },
    { value: "lifestyle", label: t("contactPage.servicesList.lifestyle") },
    { value: "nextgen", label: t("contactPage.servicesList.nextgen") },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contactPage.offices"),
      details: t("contactPage.officeDetails", {
        returnObjects: true,
      }) as string[],
    },
    {
      icon: Phone,
      title: t("contactPage.phone"),
      details: ["+243 XX XXX XXXX", "+33 X XX XX XX XX"],
    },
    {
      icon: Mail,
      title: t("contactPage.email"),
      details: ["contact@bridge.cd", "support@bridge.cd"],
    },
    {
      icon: Clock,
      title: t("contactPage.hours"),
      details: t("contactPage.hoursDetails", {
        returnObjects: true,
      }) as string[],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-secondary py-28 text-white md:py-36">
        <div className="container mx-auto max-w-5xl px-6 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            {t("contactPage.heroLabel")}
          </p>
          <h1 className="mb-6 font-[batangas] text-5xl font-bold md:text-7xl">
            {t("contactPage.heroTitle")}
            <span className="text-primary">
              {t("contactPage.heroTitleHighlight")}
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70">
            {t("contactPage.heroDesc")}
          </p>
          <div className="mx-auto mt-10 flex max-w-md items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <div className="flex gap-6 text-sm text-white/50">
              <span className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-green-400" />
                {t("contactPage.response24h")}
              </span>
            </div>
            <div className="h-px flex-1 bg-white/10" />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-bold">
                {t("contactPage.contactInfo")}
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="bg-card flex gap-4 rounded-xl border border-white/5 p-6"
                    >
                      <div className="bg-primary/10 text-primary flex size-12 shrink-0 items-center justify-center rounded-full">
                        <Icon className="size-6" />
                      </div>
                      <div>
                        <h3 className="mb-2 font-bold">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p
                            key={idx}
                            className="text-muted-foreground text-sm"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-primary/5 border-primary/20 mt-8 rounded-xl border p-6">
                <h3 className="mb-4 text-xl font-bold">
                  {t("contactPage.quickResponse")}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t("contactPage.quickResponseDesc")}
                </p>
                <Button asChild className="w-full">
                  <Link
                    href="https://wa.me/243000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("contactPage.chatWhatsApp")}
                  </Link>
                </Button>
              </div>
            </div>

            <div>
              <h2 className="mb-8 text-3xl font-bold">
                {t("contactPage.sendMessage")}
              </h2>
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullname" className="ml-1 text-slate-400">
                      {t("contactPage.fullName")}
                    </Label>
                    <Input
                      id="fullname"
                      type="text"
                      placeholder={t("contactPage.fullNamePlaceholder")}
                      className="h-14 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="ml-1 text-slate-400">
                      {t("contactPage.emailLabel")}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t("contactPage.emailPlaceholder")}
                      className="h-14 rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="ml-1 text-slate-400">
                    {t("contactPage.phoneLabel")}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={t("contactPage.phonePlaceholder")}
                    className="h-14 rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="ml-1 text-slate-400">
                    {t("contactPage.profileLabel")}
                  </Label>
                  <Combobox
                    value={selectedProfiles}
                    onValueChange={setSelectedProfiles}
                    multiple
                  >
                    <ComboboxChips ref={anchor} className="min-h-14 rounded-xl">
                      {selectedProfiles.map((value) => {
                        const profile = profiles.find((p) => p.value === value);
                        return (
                          <ComboboxChip key={value}>
                            {profile?.label}
                          </ComboboxChip>
                        );
                      })}
                      <ComboboxChipsInput
                        placeholder={t("contactPage.profilePlaceholder")}
                      />
                    </ComboboxChips>
                    <ComboboxContent anchor={anchor}>
                      <ComboboxList>
                        {profiles.map((profile) => (
                          <ComboboxItem
                            key={profile.value}
                            value={profile.value}
                          >
                            {profile.label}
                          </ComboboxItem>
                        ))}
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                </div>

                <div className="space-y-2">
                  <Label className="ml-1 text-slate-400">
                    {t("contactPage.servicesLabel")}
                  </Label>
                  <Combobox
                    value={selectedServices}
                    onValueChange={setSelectedServices}
                    multiple
                  >
                    <ComboboxChips
                      ref={servicesAnchor}
                      className="min-h-14 rounded-xl"
                    >
                      {selectedServices.map((value) => {
                        const service = services.find((s) => s.value === value);
                        return (
                          <ComboboxChip key={value}>
                            {service?.label}
                          </ComboboxChip>
                        );
                      })}
                      <ComboboxChipsInput
                        placeholder={t("contactPage.servicesPlaceholder")}
                      />
                    </ComboboxChips>
                    <ComboboxContent anchor={servicesAnchor}>
                      <ComboboxList>
                        {services.map((service) => (
                          <ComboboxItem
                            key={service.value}
                            value={service.value}
                          >
                            {service.label}
                          </ComboboxItem>
                        ))}
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="ml-1 text-slate-400">
                    {t("contactPage.subjectLabel")}
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder={t("contactPage.subjectPlaceholder")}
                    className="h-14 rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="ml-1 text-slate-400">
                    {t("contactPage.messageLabel")}
                  </Label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder={t("contactPage.messagePlaceholder")}
                    className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full rounded-xl border bg-transparent p-6 text-base shadow-xs outline-none transition-[color,box-shadow] focus-visible:ring-[3px] aria-invalid:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  className="h-16 w-full rounded-xl text-xl font-black transition-transform hover:scale-[1.01]"
                >
                  {t("contactPage.submit")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card-dark/30 py-16">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-4 text-2xl font-bold">{t("contactPage.meetUs")}</h2>
          <p className="text-muted-foreground mb-6">
            {t("contactPage.meetUsDesc")}
          </p>
          <Button size="lg" variant="outline">
            {t("contactPage.bookAppointment")}
          </Button>
        </div>
      </section>
    </div>
  );
}
