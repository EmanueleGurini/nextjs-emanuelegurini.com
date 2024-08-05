import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Chi è Emanuele Gurini: Software Engineer, Formatore e Coach di Programmazione",
  description:
    "Emanuele Gurini è un software engineer e formatore specializzato in programmazione Front-end, Backend e Cloud. Scopri la sua filosofia di insegnamento e come può aiutarti a raggiungere i tuoi obiettivi tecnologici",
  keywords: [
    "Emanuele Gurini",
    "software engineer",
    "formatore programmazione",
    "coach programmazione",
  ],
};

function page() {
  return (
    <main>
      <div className="mx-auto max-w-2xl pb-6 sm:pb-6 lg:pb-6 lg:pt-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Chi sono
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Tutorial e guide per Frontend, Backend e Cloud.
          </p>
        </div>
      </div>

      <section className="prose prose-quoteless prose-neutral">
        <p>
          Ciao! Mi chiamo Emanuele Gurini e sono un software engineer, formatore
          e coach di programmazione front-end, back-end e cloud. La mia carriera
          è iniziata sviluppando siti web e sono arrivato a lavorare per grandi
          aziende come Claranet.
        </p>
        <h3>La mia filosofia:</h3>
        <p>
          Credo fortemente nella formazione e nella condivisione della
          conoscenza. Ogni tecnologia ha una storia, un problema che qualcuno ha
          cercato di risolvere. Insegnare programmazione è, per me, come
          insegnare storia dell'arte: ogni soluzione tecnologica è un'opera
          d'arte del proprio tempo.
        </p>
        <h3>Il mio metodo:</h3>
        <p>
          Nelle mie classi, l'apprendimento avviene attraverso il dialogo, il
          confronto e lo studio delle tecnologie. La programmazione si impara
          programmando: poniti un obiettivo, cerca di realizzarlo e affronta i
          problemi che si presentano. Questo approccio pratico ti aiuterà a
          sviluppare le competenze necessarie per eccellere nel mondo del tech.
        </p>
        <h3>Cosa offro:</h3>
        <ul>
          <li>
            <strong>Esperienza professionale:</strong> anni di esperienza nel
            settore tecnologico, collaborando con aziende di primo piano;
          </li>
          <li>
            <strong>formazione completa:</strong> tutorial e guide per tutti i
            livelli, dal frontend al backend e cloud;
          </li>
          <li>
            <strong>approccio pratico:</strong> lezioni interattive e progetti
            reali per imparare programmando.
          </li>
        </ul>
        <h3>Perché scegliere me</h3>
        <p>
          Se sei un'azienda o una scuola, posso offrirti lezioni personalizzate,
          workshop e programmi di formazione su misura. Il mio obiettivo è
          aiutarti a sviluppare le competenze necessarie per affrontare le sfide
          del mondo tecnologico.
        </p>
        <h3>Contattami</h3>
        <p>
          Vuoi saperne di più? Contattami per discutere delle tue esigenze di
          formazione o per qualsiasi domanda. Sono qui per aiutarti a
          raggiungere i tuoi obiettivi di apprendimento.
        </p>
      </section>
    </main>
  );
}

export default page;
