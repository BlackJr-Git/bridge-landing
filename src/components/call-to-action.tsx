import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-16">
      <div className="mx-auto container rounded-3xl border px-6 py-12 md:py-20 lg:py-32">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Prêt à franchir le pont ?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Contactez-nous et commencez votre accompagnement personnalisé dès
            aujourd'hui.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                <span>Nous contacter</span>
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link
                href="https://wa.me/243000000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Discuter sur WhatsApp</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
