import React from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/logo";

const quickLinks = [
  { href: "#services", label: "Nos Services" },
  { href: "#club", label: "Le Club Bridge" },
  // { href: "#", label: "Blog & Guides" },
  // { href: "#", label: "Espace Presse" },
];

const offices = [
  { location: "République Démocratique du Congo" },
  { location: "France" },
  { location: "Belgique" },
  { location: "Afrique du Sud" },
];

const legalLinks = [
  { href: "#", label: "Mentions Légales" },
  { href: "#", label: "Confidentialité" },
  { href: "#", label: "CGU" },
];

export default function Footer() {
  return (
    <footer className="m-1 rounded-3xl border">
      <div className="mx-auto container space-y-16 px-5 py-16">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-8">
          <Link href="/" aria-label="go home">
            <Logo />
          </Link>
          <div className="flex gap-3">
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-muted-foreground hover:text-primary block"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                ></path>
              </svg>
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-muted-foreground hover:text-primary block"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
                ></path>
              </svg>
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary block"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          <div className="col-span-2">
            <span className="font-medium">À propos</span>
            <p className="text-muted-foreground mt-4 max-w-sm text-sm leading-relaxed">
              Le premier guichet unique digital pour la diaspora et les
              expatriés en République Démocratique du Congo. Nous transformons
              votre ambition en réalité.
            </p>
          </div>
          <div>
            <span className="font-medium">Liens Rapides</span>
            <ul className="mt-4 list-inside space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-primary text-muted-foreground text-sm duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-sm font-medium">Bureaux</span>
            <ul className="mt-4 list-inside space-y-4">
              {offices.map((office, index) => (
                <li
                  key={index}
                  className="text-muted-foreground flex items-center gap-2 text-sm"
                >
                  <MapPin className="size-4" />
                  {office.location}
                </li>
              ))}
            </ul>

            <form className="mt-12 w-full max-w-xs">
              <div className="space-y-2.5">
                <Label className="block text-sm font-medium" htmlFor="email">
                  Abonnez-vous à notre newsletter
                </Label>
                <Input
                  className="input variant-mixed sz-md"
                  placeholder="Votre email"
                  type="email"
                  id="email"
                  required
                  name="email"
                />
              </div>
              <Button type="submit" className="mt-3">
                <span>S'abonner</span>
              </Button>
            </form>
          </div>
        </div>
        <div className="bg-muted mt-16 flex items-center justify-between rounded-md p-4 px-6 py-3">
          <span>
            {" "}
            © {new Date().getFullYear()} BRIDGE Digital Platform. Tous droits
            réservés.
          </span>
          <div className="flex gap-4">
            {legalLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-primary text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
