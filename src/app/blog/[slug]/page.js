import fs from "fs/promises";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Page({ params }) {
  const file = await fs.readFile(`./posts/${params.slug}.mdx`);
  const markdown = await file.toString();
  const { data, content } = matter(markdown);

  return (
    <div>
      <h1>Post: {params.slug}</h1>
      <h1>title: {data.title}</h1>
      <MDXRemote source={content} />
    </div>
  );
}
