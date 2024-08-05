import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Impara a programmare con Emanuele Gurini: Tutorial Front-end, Backend e Cloud",
  description:
    "Scopri risorse gratuite per imparare a programmare. Tutorial e guide dettagliate per Front-end, Backend con Node.js e Cloud con AWS e Google Cloud. Inizia oggi il tuo percorso di apprendimento con Emanuele Gurini",
  keywords: [
    "imparare a programmare",
    "tutorial front-end",
    "backend",
    "cloud",
    "risorse gratuite",
  ],
};

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-2xl pb-12 sm:pb-12 lg:pb-24 lg:pt-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Impara a programmare
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Tutorial e guide per Frontend, Backend e Cloud.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href={"/tutorial"}
              className="rounded-md bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Tutorial
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Chi sono <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      <section className="prose prose-quoteless prose-neutral">
        <h3>Benvenuto nel mondo della programmazione libera e accessibile</h3>
        <p>
          Ciao! Sono Emanuele Gurini e questo è un luogo dedicato
          all'apprendimento della programmazione. La programmazione può sembrare
          un mondo complicato e inaccessibile. Molti si sentono sopraffatti
          dalla quantità di risorse disponibili online e non sanno da dove
          cominciare.
        </p>
        <p>
          E se ci fosse un modo per imparare a programmare con risorse di
          qualità che qualcuno ha già provveduto a selezionare?
        </p>

        <h3>Il problema della complessità dell'apprendimento</h3>
        <p>
          Viviamo in un mondo dove la tecnologia evolve rapidamente, e stare al
          passo è una sfida continua. La difficoltà di trovare risorse
          affidabili e accessibili può rallentare il tuo percorso di
          apprendimento.
        </p>

        <h3>La mia soluzione: Risorse di qualità per tutti</h3>
        <p>
          Credo fortemente nel rendere la conoscenza accessibile a tutti. Sul
          mio portale troverai:
        </p>
        <ul>
          <li>
            <strong>Tutorial e guide complete:</strong> Dalla programmazione
            front-end al backend con Node.js, fino al cloud computing su AWS e
            Google Cloud;
          </li>
          <li>
            <strong>Risorse gratuite:</strong> Una vasta selezione di contenuti
            gratuiti;
          </li>
          <li>
            <strong>Approccio pratico e interattivo:</strong> Impara facendo,
            con esempi pratici e progetti reali.
          </li>
        </ul>
        <h3>Impara programmando</h3>
        <p>
          La programmazione si impara programmando: poniti un obiettivo, cerca
          di realizzarlo e impara a programmare risolvendo i problemi che si
          presentano. Questa filosofia è alla base del mio metodo di
          insegnamento, che ti guida passo dopo passo attraverso esercitazioni
          pratiche e progetti concreti.
        </p>
        <h3>Cosa offro:</h3>
        <ul>
          <li>
            <strong>Imparare a programmare:</strong> Accedi a tutorial
            dettagliati e facili da seguire per iniziare il tuo viaggio nel
            mondo della programmazione;
          </li>
          <li>
            <strong>Front-end e Cloud:</strong> Scopri le ultime tecnologie
            front-end e le migliori pratiche per il cloud computing;
          </li>
          <li>
            <strong>Tutorial e guide:</strong> Risorse sempre aggiornate per
            garantirti un apprendimento efficace e all'avanguardia;
          </li>
        </ul>

        <h3>Inizia ora!</h3>
        <p>
          Non perdere l'occasione di migliorare le tue competenze e di
          avventurarti nel mondo della programmazione. Visita le mie sezioni di
          tutorial e guide e inizia a imparare oggi stesso!
        </p>
        <h3>Contattami</h3>
        <p>
          Hai domande o vuoi saperne di più sui miei contenuti? Non esitare a
          contattarmi. Sono qui per aiutarti a raggiungere i tuoi obiettivi di
          apprendimento.
        </p>
      </section>
    </main>
  );
}
