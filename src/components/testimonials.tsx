import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto container space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-4xl font-medium lg:text-5xl">
            Ils ont franchi le pas avec Bridge
          </h2>
          <p>
            Découvrez les témoignages de ceux qui ont fait confiance à Bridge
            pour leur installation, investissement ou retour en RDC.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
            <CardHeader>
              <div className="text-primary text-2xl font-bold">★★★★★</div>
            </CardHeader>
            <CardContent>
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium">
                  Bridge a complètement transformé mon retour au pays. De
                  l'accueil à l'aéroport jusqu'à l'installation de ma famille,
                  tout était parfaitement organisé. Leur accompagnement
                  personnalisé m'a permis de me concentrer sur mon projet
                  d'investissement sans stress. Je recommande vivement leurs
                  services à toute la diaspora !
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://tailus.io/images/reviews/shekinah.webp"
                      alt="Shekinah Tshiokufila"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>ST</AvatarFallback>
                  </Avatar>

                  <div>
                    <cite className="text-sm font-medium">
                      Marie-Claire Mukendi
                    </cite>
                    <span className="text-muted-foreground block text-sm">
                      Diaspora - Paris, France
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium">
                  En tant qu'expatrié, j'avais besoin d'un accompagnement fiable
                  pour mon installation à Kinshasa. Bridge a dépassé mes
                  attentes : logement sécurisé, démarches administratives
                  facilitées, et un réseau professionnel immédiat via le Club
                  Bridge. Une vraie mine d'or !
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://tailus.io/images/reviews/jonathan.webp"
                      alt="Jonathan Yombo"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>JY</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium">David Thompson</cite>
                    <span className="text-muted-foreground block text-sm">
                      Expatrié - Londres, UK
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>
                  Bridge m'a aidé à identifier les meilleures opportunités
                  d'investissement immobilier à Kinshasa. Leur expertise du
                  marché local et leur réseau m'ont fait gagner un temps
                  précieux. Mon projet avance sereinement grâce à leur suivi
                  régulier.
                </p>

                <div className="grid items-center gap-3 grid-cols-[auto_1fr]">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://tailus.io/images/reviews/yucel.webp"
                      alt="Jean-Paul Kabongo"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>JK</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium">
                      Jean-Paul Kabongo
                    </cite>
                    <span className="text-muted-foreground block text-sm">
                      Investisseur - Bruxelles, Belgique
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="card variant-mixed">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>
                  Après 35 ans à l'étranger, je voulais rentrer profiter de ma
                  retraite au pays. Bridge a rendu cette transition fluide et
                  agréable. Leur service premium m'a évité tous les tracas
                  administratifs. Je vis maintenant paisiblement à Kinshasa !
                </p>

                <div className="grid grid-cols-[auto_1fr] gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://tailus.io/images/reviews/rodrigo.webp"
                      alt="André Mbuyi"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>AM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">André Mbuyi</p>
                    <span className="text-muted-foreground block text-sm">
                      Retraité - Montréal, Canada
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
