"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function CallToAction() {
  const { t } = useTranslation();
  return (
    <section className="py-16">
      <div className="mx-auto container rounded-3xl border px-6 py-12 md:py-20 lg:py-32">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            {t("callToAction.title")}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t("callToAction.description")}
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                <span>{t("callToAction.contact")}</span>
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link
                href="https://wa.me/243000000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{t("callToAction.whatsapp")}</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
