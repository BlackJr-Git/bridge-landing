import React from "react";

type SolutionCard = {
  title: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
};

const solutions: SolutionCard[] = [
  {
    title: "Diaspora",
    description:
      "Préparez votre retour définitif ou gérez vos projets à distance.",
    imageAlt: "Professional man representing Diaspora",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJJHSHJNL9URk46DWsvHdXaB_a4YdcHsMdvRCQRcBJDlbsiKqGaDxDOZuh_j3wVHRgHjclCxe8zBiZgQSWBMsaR7rYnIC41RM8H5XAExZGlnF--IsvUWos2KKzr0Col6Hd-VXP7Zk9euTYgqRUIwzXCU1KRcrvRwCt0aoL5lLb13SEbnX5SKuARZQXXbfeML0XUDQsZ7Qe2pLm5ZNAx5Ff2ABJiq7KXaorz532x0l_0nWCfXy7NM8QtT9na7-Ks_iA2RcjwP88HaMI",
  },
  {
    title: "Expats",
    description:
      "Simplifiez votre expatriation et celle de votre famille en toute sérénité.",
    imageAlt: "Modern office building for Expats",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKtlmkz8WWc5sPDknGJ7Vmy_piCMc8_kUf1gUpUBDTKizPnOYaG-DklmszEJqHacWoptdcnJCUbcs0BIj9yXkLaX1AZcZHTh-OBajfrARDGt-kLlhQYWANv2rnSgPVeH6yCo-QFBjtIqG2s2Hp_THHo1WXY_f1UqlJL3eADNOAwkD1YR1Y9u9Ap7dnr1GWzvn-vRoHBh3x_zl6bR31fYHBeNcrbA_i6t46_65LwdkfJSCB1N6UT1KEmTbVPG8nXfVjR3YdB1UD7OPj",
  },
  {
    title: "Investisseurs",
    description:
      "Identifiez les opportunités et sécurisez vos opérations foncières.",
    imageAlt: "Investor meeting room",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDJuHDO0PDQZR3ohdG-0OEMbTda5N-S9-OnJgbs6cZWljay3slrnu6rbg1HOMl7VqliZAF_IfKK7Qz8HtPR--K0ZVEmYd-81i9DvnPHJGlzCLLRFAtpC5M7DSaWALCCkmdQreSEl0OEovNJnaCx75Uixue9NDQH-eFdYL5APPXfyup57v35rkW-B5Sf_NP1dcaBGtmZHjEoydQ92pFTyXwfem9BPI2O89ZyR1_uZ86JgiW_8ikSLUBPMtf2mnp850VhyXDa32qjPYq3",
  },
  {
    title: "Retraités",
    description:
      "Profitez d'un cadre de vie premium avec des services santé de pointe.",
    imageAlt: "Peaceful home for retirees",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAU3uykmLtBwlXf7P7VS8boPu4U1efw1qYIjc9sM2G91PZDV2x3wHeTYA0JyFHxhaLWsFGnj7gXxi1ngDe4DPK5K5HsxrB8QM-u4HIDnGsT20I6izAzOplREBKYUtJjRAlXThQrPdgZs-A9ow1H_FpheSxTQTJPtNhEr8r82R1U78RkM6ZuR9zxsYPWY4jq2i9wxNZpKNzmKwhz3BJi5vOsF9uPLaNMH45yxrLZGuxgfNTGUsSOidb_s2qCgsGj8yFacUp42puqyHo-",
  },
];

export default function SolutionsSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">Solutions sur mesure</h2>
          <p className="text-slate-400">
            Chaque profil a des besoins uniques pour réussir en RDC.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group relative aspect-3/4 cursor-pointer overflow-hidden rounded-2xl"
            >
              <img
                alt={solution.imageAlt}
                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={solution.imageSrc}
              />
              <div className="absolute inset-0 bg-linear-to-t from-secondary via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 p-8">
                <h3 className="mb-2 text-2xl font-bold text-white">
                  {solution.title}
                </h3>
                <p className="text-sm text-slate-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
