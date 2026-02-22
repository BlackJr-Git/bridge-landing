"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Briefcase,
  TrendingUp,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Testimonial = {
  avant: string;
  difficulte: string;
  avecBridge: string;
};

type Profile = {
  id: string;
  name: string;
  icon: React.ElementType;
  testimonials: Testimonial[];
};

const profiles: Profile[] = [
  {
    id: "diaspora",
    name: "Diaspora",
    icon: Users,
    testimonials: [
      {
        avant: "Je suis arrivé à Kinshasa sans personne pour m'orienter.",
        difficulte: "Transport, démarches confuses.",
        avecBridge:
          "Prise en charge dès l'aéroport, chauffeur et accompagnement administratif.",
      },
      {
        avant: "Mes colis mettaient des semaines à arriver.",
        difficulte: "Perte de temps et d'argent.",
        avecBridge: "Réception sécurisée et suivi organisé.",
      },
      {
        avant:
          "Je voulais ouvrir un compte mais je ne savais pas par où commencer.",
        difficulte: "Manque d'informations fiables.",
        avecBridge: "Orientation bancaire et mise en relation rapide.",
      },
      {
        avant: "Chaque retour au pays était stressant.",
        difficulte: "Logistique imprévisible.",
        avecBridge: "Organisation complète avant l'arrivée.",
      },
      {
        avant: "Je voulais investir mais je craignais les risques.",
        difficulte: "Manque de structure.",
        avecBridge: "Accompagnement sécurisé et partenaires vérifiés.",
      },
      {
        avant: "Je me sentais seul dans mes démarches.",
        difficulte: "Absence de réseau.",
        avecBridge: "Accès à une communauté et à des guichets locaux.",
      },
    ],
  },
  {
    id: "expats",
    name: "Expats",
    icon: Briefcase,
    testimonials: [
      {
        avant: "Trouver un logement adapté était compliqué.",
        difficulte: "Manque de contacts fiables.",
        avecBridge: "Orientation logement et installation accompagnée.",
      },
      {
        avant: "Je ne comprenais pas les procédures locales.",
        difficulte: "Complexité administrative.",
        avecBridge: "Assistance et explications claires.",
      },
      {
        avant: "Je n'avais pas de réseau professionnel.",
        difficulte: "Isolement.",
        avecBridge: "Mise en relation stratégique.",
      },
      {
        avant: "Je craignais pour ma sécurité.",
        difficulte: "Méconnaissance du terrain.",
        avecBridge: "Services encadrés et fiables.",
      },
      {
        avant: "Mon arrivée a été improvisée.",
        difficulte: "Perte de temps.",
        avecBridge: "Plan d'arrivée structuré.",
      },
      {
        avant: "Je voulais investir localement.",
        difficulte: "Manque d'accompagnement.",
        avecBridge: "Conseil et partenaires validés.",
      },
    ],
  },
  {
    id: "investisseurs",
    name: "Investisseurs",
    icon: TrendingUp,
    testimonials: [
      {
        avant: "Mon premier projet n'a pas abouti.",
        difficulte: "Mauvais interlocuteurs.",
        avecBridge: "Sélection de partenaires fiables.",
      },
      {
        avant: "Je ne comprenais pas les procédures financières.",
        difficulte: "Risque juridique.",
        avecBridge: "Structuration et orientation bancaire.",
      },
      {
        avant: "Impossible d'obtenir un financement.",
        difficulte: "Dossier incomplet.",
        avecBridge: "Accompagnement montage dossier.",
      },
      {
        avant: "Je manquais d'informations fiables.",
        difficulte: "Décision retardée.",
        avecBridge: "Étude et mise en relation.",
      },
      {
        avant: "Je craignais les pertes.",
        difficulte: "Absence de cadre sécurisé.",
        avecBridge: "Sécurisation des étapes.",
      },
      {
        avant: "Je travaillais seul.",
        difficulte: "Pas de relais local.",
        avecBridge: "Représentation et suivi terrain.",
      },
    ],
  },
  {
    id: "retraites",
    name: "Retraités",
    icon: Heart,
    testimonials: [
      {
        avant: "Revenir au pays me faisait peur.",
        difficulte: "Organisation floue.",
        avecBridge: "Installation clé en main.",
      },
      {
        avant: "Je ne savais pas comment organiser mon suivi médical.",
        difficulte: "Incertitude santé.",
        avecBridge: "Orientation santé et partenaires fiables.",
      },
      {
        avant: "Les démarches administratives étaient compliquées.",
        difficulte: "Temps et énergie perdus.",
        avecBridge: "Assistance personnalisée.",
      },
      {
        avant: "Je cherchais un cadre de vie stable.",
        difficulte: "Manque de conseils.",
        avecBridge: "Accompagnement logement.",
      },
      {
        avant: "Je voulais investir pour mes enfants.",
        difficulte: "Manque d'orientation.",
        avecBridge: "Conseil patrimonial structuré.",
      },
      {
        avant: "Je voulais revenir sereinement.",
        difficulte: "Incertitude globale.",
        avecBridge: "Parcours organisé étape par étape.",
      },
    ],
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="min-w-[300px] max-w-[350px] shrink-0 border-0 bg-white shadow-lg">
      <CardContent className="space-y-4 p-6">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#EF4F67]">
            Avant
          </p>
          <p className="text-sm italic text-[#454F80]">"{testimonial.avant}"</p>
        </div>
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#454F80]/60">
            Difficulté
          </p>
          <p className="text-sm text-[#454F80]/80">{testimonial.difficulte}</p>
        </div>
        <div className="rounded-lg bg-[#EF4F67]/10 p-3">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#EF4F67]">
            Avec Bridge
          </p>
          <p className="text-sm font-medium text-[#454F80]">
            {testimonial.avecBridge}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

function ProfileSlider({ profile }: { profile: Profile }) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  React.useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", checkScroll);
      return () => ref.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 370;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const Icon = profile.icon;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-[#EF4F67]/10">
            <Icon className="size-5 text-[#EF4F67]" />
          </div>
          <h3 className="text-xl font-bold text-[#454F80]">{profile.name}</h3>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="size-8 rounded-full"
          >
            <ChevronLeft className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="size-8 rounded-full"
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="scrollbar-hide flex gap-4 overflow-x-auto pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {profile.testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}

export default function BeforeAfterTestimonials() {
  const [activeProfile, setActiveProfile] = React.useState<string>("diaspora");

  const currentProfile = profiles.find((p) => p.id === activeProfile);

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Ils ont vécu ça… <span className="text-primary">puis Bridge</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#454F80]/70">
            Découvrez comment Bridge a transformé l'expérience de nos membres
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {profiles.map((profile) => {
            const Icon = profile.icon;
            return (
              <button
                key={profile.id}
                onClick={() => setActiveProfile(profile.id)}
                className={cn(
                  "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
                  activeProfile === profile.id
                    ? "bg-[#EF4F67] text-white shadow-lg shadow-[#EF4F67]/30"
                    : "bg-white text-[#454F80] hover:bg-[#EF4F67]/10",
                )}
              >
                <Icon className="size-4" />
                {profile.name}
              </button>
            );
          })}
        </div>

        {currentProfile && <ProfileSlider profile={currentProfile} />}
      </div>
    </section>
  );
}
