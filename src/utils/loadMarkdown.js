import matter from "gray-matter";

export async function loadMarkdown(path) {
  const res = await fetch(path);
  const raw = await res.text();
  const { data, content } = matter(raw);

  return {
    frontmatter: data,
    content
  };
}
