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
      <div className="mx-auto max-w-2xl pb-6 sm:pb-6 lg:pb-6 lg:pt-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Hai domande? Contattami!
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Tutorial e guide per Frontend, Backend e Cloud.
          </p>
        </div>
      </div>

      <section className="prose prose-quoteless prose-neutral">
        <h3>Come posso aiutarti:</h3>
        <ul>
          <li>
            <strong>Supporto agli studenti:</strong> hai dubbi su un tutorial o
            una guida? Scrivimi!
          </li>
          <li>
            <strong>collaborazioni:</strong> sei un’azienda o una scuola?
            Contattami per organizzare lezioni personalizzate, workshop o
            programmi di formazione su misura;
          </li>
          <li>
            <strong>feedback e suggerimenti:</strong> la tua opinione è
            importante! Fammi sapere cosa ne pensi dei miei contenuti e come
            posso migliorarli.
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
    </main>
  );
}

export default page;
