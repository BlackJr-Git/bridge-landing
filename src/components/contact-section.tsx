import React from "react";

export default function ContactSection() {
  return (
    <section className="bg-card-dark/20 py-24" id="contact">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-black">Prêt à franchir le pas ?</h2>
          <p className="text-slate-400">
            Laissez-nous vos coordonnées, un expert Bridge vous recontactera sous
            24h.
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="fullname"
                className="ml-1 text-sm font-bold text-slate-400"
              >
                Nom Complet
              </label>
              <input
                id="fullname"
                type="text"
                placeholder="Jean Dupont"
                className="focus:border-primary focus:ring-primary bg-background-dark h-14 w-full rounded-xl border border-white/10 px-6 text-white"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="ml-1 text-sm font-bold text-slate-400"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="jean@exemple.com"
                className="focus:border-primary focus:ring-primary bg-background-dark h-14 w-full rounded-xl border border-white/10 px-6 text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="profile"
              className="ml-1 text-sm font-bold text-slate-400"
            >
              Votre Profil
            </label>
            <select
              id="profile"
              className="focus:border-primary focus:ring-primary bg-background-dark h-14 w-full appearance-none rounded-xl border border-white/10 px-6 text-white"
            >
              <option>Diaspora</option>
              <option>Expat</option>
              <option>Investisseur</option>
              <option>Autre</option>
            </select>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="ml-1 text-sm font-bold text-slate-400"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Comment pouvons-nous vous aider ?"
              className="focus:border-primary focus:ring-primary bg-background-dark w-full rounded-xl border border-white/10 p-6 text-white"
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-background-dark h-16 w-full rounded-xl text-xl font-black transition-transform hover:scale-[1.01]"
          >
            Envoyer ma demande
          </button>
        </form>
      </div>
    </section>
  );
}
