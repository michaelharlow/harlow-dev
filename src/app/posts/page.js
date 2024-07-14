import { getPosts } from "@/util/get-posts";

import Link from "next/link";

export default async function Page() {
  const posts = await getPosts();
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <main className="m-auto max-w-3xl sm:px-0 px-6">
      <h1 className="sm:text-5xl text-2xl sm:leading-snug font-semibold my-12 text-left">
        /Posts
      </h1>
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/posts/${post.slug}`}
              className="flex sm:flex-row flex-col justify-between hover:underline"
            >
              {post.title}
              <time
                dateTime={post.date}
                className="sm:text-base sm:text-black text-sm text-gray-500"
              >
                {post.date}
              </time>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
