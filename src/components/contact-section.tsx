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

const profiles = [
  { value: "diaspora", label: "Diaspora" },
  { value: "expat", label: "Expat" },
  { value: "investisseur", label: "Investisseur" },
  { value: "retraite", label: "Retraité" },
  { value: "autre", label: "Autre" },
];

export default function ContactSection() {
  const [selectedProfiles, setSelectedProfiles] = React.useState<string[]>([]);
  const anchor = useComboboxAnchor();

  return (
    <section className="bg-card-dark/20 py-24" id="contact">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-black">Prêt à franchir le pas ?</h2>
          <p className="text-slate-400">
            Laissez-nous vos coordonnées, un expert Bridge vous recontactera
            sous 24h.
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="fullname" className="ml-1 text-slate-400">
                Nom Complet
              </Label>
              <Input
                id="fullname"
                type="text"
                placeholder="Jean Dupont"
                className="h-14 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="ml-1 text-slate-400">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="jean@exemple.com"
                className="h-14 rounded-xl"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="ml-1 text-slate-400">Votre Profil</Label>
            <Combobox
              value={selectedProfiles}
              onValueChange={setSelectedProfiles}
              multiple
            >
              <ComboboxChips ref={anchor} className="min-h-14 rounded-xl">
                {selectedProfiles.map((value) => {
                  const profile = profiles.find((p) => p.value === value);
                  return (
                    <ComboboxChip key={value}>{profile?.label}</ComboboxChip>
                  );
                })}
                <ComboboxChipsInput placeholder="Sélectionnez vos profils" />
              </ComboboxChips>
              <ComboboxContent anchor={anchor}>
                <ComboboxList>
                  {profiles.map((profile) => (
                    <ComboboxItem key={profile.value} value={profile.value}>
                      {profile.label}
                    </ComboboxItem>
                  ))}
                </ComboboxList>
                <ComboboxEmpty>Aucun profil trouvé</ComboboxEmpty>
              </ComboboxContent>
            </Combobox>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="ml-1 text-slate-400">
              Message
            </Label>
            <textarea
              id="message"
              rows={4}
              placeholder="Comment pouvons-nous vous aider ?"
              className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full rounded-xl border bg-transparent p-6 text-base shadow-xs outline-none transition-[color,box-shadow] focus-visible:ring-[3px] aria-invalid:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            />
          </div>

          <Button
            type="submit"
            className="h-16 w-full rounded-xl text-xl font-black transition-transform hover:scale-[1.01]"
          >
            Envoyer ma demande
          </Button>
        </form>
      </div>
    </section>
  );
}
