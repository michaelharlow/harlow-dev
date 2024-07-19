import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";

//TODO cache
const getPosts = cache(async () => {
  const directory = path.join(process.cwd(), "posts");
  const files = await fs.readdir(directory);

  const posts = files.map(async (filename) => {
    const file = await fs.readFile(path.join(directory, filename), "utf-8");
    const markdown = await file.toString();
    const { data, content } = matter(markdown);
    return {
      ...data,
      body: content,
    };
  });

  return Promise.all(posts);
});

async function getPost(slug) {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
}

export { getPosts, getPost };
