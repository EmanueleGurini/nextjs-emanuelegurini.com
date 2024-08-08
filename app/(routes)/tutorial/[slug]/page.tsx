import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { CustomMDX } from "@/app/(components)/mdx";
import { getTutorialPosts } from "../../../(db)/blog";
import { unstable_noStore as noStore } from "next/cache";

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  let post = getTutorialPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? `https://emanuelegurini.com${image}`
    : `https://emanuelegurini.com/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://emanuelegurini.com/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

function formatDate(date) {
  noStore();
  let currentDate = new Date().getTime();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date).getTime();
  let timeDifference = Math.abs(currentDate - targetDate);
  let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  let fullDate = new Date(date).toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (daysAgo < 1) {
    return "Today";
  } else if (daysAgo < 7) {
    return `${fullDate} (${daysAgo}d ago)`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    return `${fullDate} (${weeksAgo}w ago)`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    return `${fullDate} (${monthsAgo}mo ago)`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365);
    return `${fullDate} (${yearsAgo}y ago)`;
  }
}

export default function Tutorial({ params }) {
  let post = getTutorialPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://emanuelegurini.com${post.metadata.image}`
              : `https://emanuelegurini.com/og?title=${post.metadata.title}`,
            url: `https://emanuelegurini.com/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Emanuele Gurini",
            },
          }),
        }}
      />
      <div className="overflow-hidden bg-pink-300 text-[#db2777] py-6 sm:py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none ">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-xl">
                <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  {post.metadata.title}
                </h2>
                <h1 className="text-base font-semibold leading-7 text-pink-600">
                  Scritto da Emanuele Gurini
                  <Suspense fallback={<p className="h-5" />}>
                    <p className="text-sm">
                      {formatDate(post.metadata.publishedAt)}
                    </p>
                  </Suspense>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden py-6 sm:py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none ">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-xl">
                <div className="flex justify-between items-center mt-2 mb-8 max-w-[650px]"></div>
                <article className="prose prose-quoteless prose-neutral">
                  <CustomMDX source={post.content} />
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
