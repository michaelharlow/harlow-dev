import { getPost, getPosts } from "@/util/get-posts";

import rehypePrettyCode from "rehype-pretty-code";

import { MDXRemote } from "next-mdx-remote/rsc";

import { ArrowUpRight } from "lucide-react";

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Page({ params }) {
  const { title, body } = await getPost(params.slug);
  console.log(params.slug);

  return (
    <div className={`m-auto max-w-3xl sm:px-0 px-8`}>
      <h1 className="sm:text-4xl text-2xl sm:leading-snug font-semibold my-12 text-left">
        {title}
      </h1>
      <main className="post-container">
        <MDXRemote
          source={body}
          options={{
            mdxOptions: {
              remarkPlugins: [],
              rehypePlugins: [
                [
                  rehypePrettyCode,
                  {
                    theme: "one-dark-pro",
                  },
                ],
              ],
            },
          }}
        />
      </main>
      <div className="flex flex-row gap-x-12 mt-3 justify-center mb-8">
        <a
          className="hover:underline group flex flex-row gap-x-1 items-center"
          href="https://github.com/michaelharlow"
        >
          Github
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          className="hover:underline group flex flex-row gap-x-1 items-center"
          href="https://www.linkedin.com/in/michaelaharlow/"
        >
          linkedin
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}
