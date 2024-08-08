import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contatta Emanuele Gurini: Supporto, Collaborazioni e Lezioni Personalizzate",
  description:
    "Hai domande? Contatta Emanuele Gurini per supporto sui tutorial, collaborazioni aziendali, lezioni personalizzate e workshop. Scopri come posso aiutarti a migliorare le tue competenze di programmazione.",
  keywords: [
    "contatta Emanuele Gurini",
    "supporto tutorial",
    "collaborazioni aziendali",
    "lezioni programmazione",
  ],
};

function page() {
  return (
    <main>
      <div className="overflow-hidden bg-pink-300 text-[#db2777] py-6 sm:py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Contatti
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden py-6 sm:py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <section className="prose prose-quoteless prose-neutral">
                  <h3>Come posso aiutarti:</h3>
                  <ul>
                    <li>
                      <strong>Supporto agli studenti:</strong> hai dubbi su un
                      tutorial o una guida? Scrivimi!
                    </li>
                    <li>
                      <strong>collaborazioni:</strong> sei un’azienda o una
                      scuola? Contattami per organizzare lezioni personalizzate,
                      workshop o programmi di formazione su misura;
                    </li>
                    <li>
                      <strong>feedback e suggerimenti:</strong> la tua opinione
                      è importante! Fammi sapere cosa ne pensi dei miei
                      contenuti e come posso migliorarli.
                    </li>
                  </ul>
                  <h3>I miei contatti:</h3>
                  <ul>
                    <li>
                      <strong>Email:</strong> hello [at] emanueleigurini.com;
                    </li>
                    <li>
                      <strong>LinkedIn:</strong>{" "}
                      https://www.linkedin.com/in/emanuelegurini
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
