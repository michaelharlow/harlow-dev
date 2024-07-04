import { getPost } from "@/util/get-posts";

import rehypePrettyCode from "rehype-pretty-code";

import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Page({ params }) {
  const { title, body } = await getPost(params.slug);

  return (
    <div className={`m-auto max-w-3xl sm:px-0 px-8`}>
      <h1 className="sm:text-5xl text-2xl sm:leading-snug font-semibold my-12 text-left">
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
                    theme: "one-dark-pro", //this syntax highlighting was such a pain in the bum, I'm writing my own post about making this work for sure :(
                  },
                ],
              ],
            },
          }}
        />
      </main>
    </div>
  );
}
