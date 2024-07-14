import { promises as fs } from "fs";
import matter from "gray-matter";

//TODO cache
async function getPosts() {
  const files = await fs.readdir("./posts");

  const posts = files.map(async (filename) => {
    const file = await fs.readFile(
      process.cwd() + `/posts/${filename}`,
      "utf-8"
    );
    const markdown = await file.toString();
    const { data, content } = matter(markdown);
    return {
      ...data,
      body: content,
    };
  });

  return Promise.all(posts);
}

async function getPost(slug) {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
}

export { getPosts, getPost };
