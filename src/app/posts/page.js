import { getPosts } from "@/util/get-posts";

import Link from "next/link";

export default async function Page() {
  const posts = await getPosts();

  return (
    <main className={"m-auto max-w-3xl sm:px-0 px-8"}>
      <h1 className="sm:text-5xl text-2xl sm:leading-snug font-semibold my-12 text-left">
        /Posts
      </h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <h1>Posts Page</h1>
    </main>
  );
}