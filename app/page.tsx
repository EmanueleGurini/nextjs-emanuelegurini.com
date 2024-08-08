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

const posts = [
  {
    id: 1,
    title: "Sviluppo Frontend",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imgUrl:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: 2,
    title: "Sviluppo Cloud",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1667143327618-bf16fc8777ba?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Coaching e formazione",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imgUrl:
      "https://images.unsplash.com/photo-1570616969692-54d6ba3d0397?q=80&w=1722&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
  },
];

export default function Home() {
  return (
    <main>
      <div className="overflow-hidden bg-pink-300 text-[#db2777] py-6 sm:py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h1 className="text-base font-semibold leading-7 text-pink-600">
                  SVILUPPO SOFTWARE EMANUELE GURINI
                </h1>
                <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  IL TUO SPECIALISTA DEL SOFTWARE QUANDO NE HAI BISOGNO
                </h2>
                <p className="mt-6 text-lg leading-8">
                  Ciao! Sono <strong>Emanuele Gurini</strong>,{" "}
                  <strong>Fractional Software Engineer</strong> con competenze
                  avanzate in{" "}
                  <strong>
                    Frontend Development, Cloud Development, React, Next.js, e
                    Node.js
                  </strong>
                  . Offro <strong>soluzioni personalizzate</strong> e supporto
                  tecnico per il sviluppo software su misura delle tue esigenze,
                  garantendo risultati concreti e scalabili.
                </p>
                <p className="mt-6 text-lg leading-8">
                  Come Fractional Software Engineer, ti offro la flessibilità di
                  cui hai bisogno per integrare le mie competenze nel tuo team o
                  progetto senza impegni a lungo termine.
                </p>
                <Link
                  href="/contatti"
                  className="my-6 inline-block rounded bg-pink-600 py-2 px-4 text-sm text-pink-200 font-bold uppercase data-[hover]:bg-pink-800 data-[active]:bg-pink-700"
                >
                  Contattami ora
                </Link>
              </div>
            </div>
            <div className="flex items-center max-w-none overflow-hidden  md:-ml-4 lg:-ml-0">
              <iframe
                className="overflow-hidden rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/rYyrtDrAvpk?si=7ucGvdpaVmlaMn14"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            {/*             <img
              alt="Product screenshot"
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            /> */}
          </div>
        </div>
      </div>

      <div className="bg-pink-300 text-[#db2777] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl lg:text-center">
            <p className="mt-6 text-lg leading-8">
              <strong>Emanuele</strong> è un esperto dello sviluppo software.
              Sviluppa dal 2016 e in questi anni ha potuto toccare moltissimi
              aspetti dello sviluppo: dal Frontend al Cloud, con AWS Inoltre si
              occupa di formazione e coaching per aspiranti programmatori,
              partendo dalle basi dello sviluppo e della programmazione.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center lg:mx-0">
            <p className=" uppercase font-bold tracking-tight text-gray-900 ">
              Sviluppo Software
            </p>
            <h2 className="mt-2 text-lg leading-8 sm:text-4xl">
              I servizi che offro:
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg"
              >
                <img
                  alt=""
                  src={post.imgUrl}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                  <div className="p-4 sm:p-6">
                    <h3 className="mt-0.5 uppercase text-lg text-white">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                      {post.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-white py-6 sm:py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Vuoi imparare a programmare?
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Credo fortemente che la conoscenza debba essere accessibile a
                  tutti. Su questo sito troverai:
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      👉 Tutorial e guide complete:
                    </dt>{" "}
                    <dd className="inline">
                      Dalla programmazione front-end al backend con Node.js,
                      fino al cloud computing su AWS e Google Cloud;
                    </dd>
                  </div>
                </dl>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      👉 Risorse gratuite:
                    </dt>{" "}
                    <dd className="inline">
                      Una vasta selezione di contenuti gratuiti;
                    </dd>
                  </div>
                </dl>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      👉 Approccio pratico e itnerattivo:
                    </dt>{" "}
                    <dd className="inline">
                      Impara facendo, con esempi pratici e progetti reali.
                    </dd>
                  </div>
                </dl>
                <Link
                  href="/tutorial"
                  className="my-6 inline-block rounded bg-pink-600 font-bold py-2 px-4 text-sm text-white uppercase data-[hover]:bg-pink-800 data-[active]:bg-pink-700"
                >
                  Tutorial
                </Link>
              </div>
            </div>
            <img
              alt="Product screenshot"
              src="https://images.unsplash.com/photo-1580894912989-0bc892f4efd0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
