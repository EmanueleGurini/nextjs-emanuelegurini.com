import { getTutorialPosts } from "@/app/(db)/blog";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Tutorial di Programmazione di Emanuele Gurini: Front-end, Backend e Cloud",
  description:
    "Accedi ai tutorial gratuiti di Emanuele Gurini su programmazione Front-end, Backend con Node.js e Cloud con AWS e Google Cloud. Impara con esercizi pratici e progetti reali per sviluppare le tue competenze tecniche.",
  keywords: [
    "tutorial programmazione",
    "front-end",
    "backend",
    "cloud",
    "Emanuele Gurini",
    "esercizi pratici",
  ],
};

function page() {
  let allBlogs = getTutorialPosts();

  return (
    <div>
      <ul className="space-y-10">
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <li key={post.slug}>
              <article className="flex flex-col space-y-1 mb-4">
                <p className="mb-2 text-gray-500">
                  {post.metadata.publishedAt}
                </p>
                <h5 className="font-medium text-gray-800">
                  {post.metadata.title}
                </h5>
                <p className="mt-1 text-gray-500">{post.metadata.summary}</p>
                <p className="mt-1">
                  <Link
                    className=" text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2"
                    href={`/tutorial/${post.slug}`}
                  >
                    Continua a leggere
                  </Link>
                </p>
              </article>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default page;
