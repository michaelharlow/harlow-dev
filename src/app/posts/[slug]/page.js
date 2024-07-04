import fs from "fs/promises";
import matter from "gray-matter";
import rehypePrettyCode from "rehype-pretty-code";

import { MDXRemote } from "next-mdx-remote/rsc";
import { Noto_Sans_Mono } from "next/font/google";

const noto_sans_mono = Noto_Sans_Mono({ subsets: ["latin"] });

export default async function Page({ params }) {
  const file = await fs.readFile(`./posts/${params.slug}.mdx`);
  const markdown = await file.toString();
  const { data, content } = matter(markdown);

  return (
    <div
      className={`m-auto max-w-3xl sm:px-0 px-8 ${noto_sans_mono.className}`}
    >
      <h1 className="sm:text-6xl text-2xl leading-snug font- font-semibold my-12 text-left">
        {data.title}
      </h1>
      <main>
        <MDXRemote
          source={content}
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
