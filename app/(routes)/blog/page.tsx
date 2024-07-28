import { getBlogPosts } from "@/app/(db)/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

function page() {
  let allBlogs = getBlogPosts();
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
                <p className="mb-2 text-gray-500">2024</p>
                <h5 className=" text-gray-800">{post.metadata.title}</h5>
                <p className="mt-1 text-gray-500">{post.metadata.summary}</p>
                <p className="mt-1">
                  <Link
                    className="text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2"
                    href={`/blog/${post.slug}`}
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
