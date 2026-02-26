import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import I18nProvider from "@/components/i18n-provider";
import { HeroHeader } from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import { batangas } from "./fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bridge - Votre Guichet d'Accompagnement Global",
  description:
    "Bridge est le premier guichet d'accompagnement global pour la diaspora, expatriés, investisseurs et retraités. Installation, services premium, et accompagnement personnalisé en RDC.",
  keywords: [
    "Bridge",
    "diaspora",
    "expatriés",
    "investisseurs",
    "retraités",
    "RDC",
    "Congo",
    "installation",
    "accompagnement",
    "services premium",
  ],
  authors: [{ name: "Bridge" }],
  openGraph: {
    title: "Bridge - Votre Guichet d'Accompagnement Global",
    description:
      "Premier guichet d'accompagnement global pour la diaspora, expatriés, investisseurs et retraités en RDC.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bridge - Votre Guichet d'Accompagnement Global",
    description:
      "Premier guichet d'accompagnement global pour la diaspora, expatriés, investisseurs et retraités en RDC.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${batangas.variable} antialiased`}
      >
        <I18nProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <HeroHeader />
            {children}
            <Footer />
            <WhatsAppButton />
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
