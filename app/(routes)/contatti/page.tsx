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
                  <h2>Come Posso Essere di Aiuto?</h2>
                  <h3>Per aziende</h3>
                  <h3>Hai bisogno di un Fractional Software Developer?</h3>
                  <p>
                    Se stai cercando un esperto di sviluppo software che possa
                    integrarsi nel tuo team per progetti specifici o a lungo
                    termine, sono a tua disposizione. Possiamo collaborare per:
                  </p>
                  <ul>
                    <li>
                      <strong>Sviluppo Frontend e Backend:</strong> React,
                      Next.js, Node.js e altro;
                    </li>
                    <li>
                      <strong>Soluzioni Cloud:</strong> implementazione e
                      gestione di infrastrutture cloud sicure e scalabili;
                    </li>
                  </ul>
                  <h3>Per Scuole e studenti:</h3>
                  <h3>Sei uno studente o rappresenti una scuola?</h3>
                  <p>Offro:</p>
                  <ul>
                    <li>
                      <strong>Lezioni personalizzate:</strong> corsi su misura
                      per studenti o gruppi;
                    </li>
                    <li>
                      <strong>Workshop Tematici:</strong> Approfondimenti su
                      tecnologie specifiche come React, Next.js, Node.js e
                      altro;
                    </li>
                    <li>
                      <strong>Supporto agli studenti:</strong> Hai domande su un
                      tutorial o una guida? Non esitare a scrivermi, sono qui
                      per aiutarti;
                    </li>
                  </ul>

                  <h3>I miei contatti:</h3>
                  <ul>
                    <li>
                      <strong>Email:</strong> emanuele [at] emanuelegurini.com;
                    </li>
                    <li>
                      <strong>LinkedIn:</strong>{" "}
                      https://www.linkedin.com/in/emanuelegurini;
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
