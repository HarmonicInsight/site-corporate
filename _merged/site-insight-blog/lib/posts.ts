import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostFrontmatter {
  title: string;
  slug: string;
  category: string;
  tags: string[];
  date: string;
  thumbnail: string;
  amazon_asin?: string;
  app_store_url?: string;
  play_store_url?: string;
  windows_url?: string;
  summary: string;
  author: string;
  featured?: boolean;
  draft?: boolean;
}

export interface Post {
  frontmatter: PostFrontmatter;
  content: string;
  slug: string;
}

export function getPostSlugs(): string[] {
  try {
    const files = fs.readdirSync(postsDirectory);
    return files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => file.replace(/\.mdx$/, ''));
  } catch {
    return [];
  }
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      frontmatter: data as PostFrontmatter,
      content,
      slug,
    };
  } catch {
    return null;
  }
}

export function getAllPosts(options?: { includeDrafts?: boolean }): Post[] {
  const slugs = getPostSlugs();
  const includeDrafts = options?.includeDrafts || process.env.INCLUDE_DRAFTS === 'true';

  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => post !== null)
    .filter((post) => includeDrafts || !post.frontmatter.draft)
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.date);
      const dateB = new Date(b.frontmatter.date);
      return dateB.getTime() - dateA.getTime();
    });
  return posts;
}

export function getDraftPosts(): Post[] {
  const slugs = getPostSlugs();
  return slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => post !== null)
    .filter((post) => post.frontmatter.draft === true)
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.date);
      const dateB = new Date(b.frontmatter.date);
      return dateB.getTime() - dateA.getTime();
    });
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter((post) => post.frontmatter.category === category);
}

export function getPostsByTag(tag: string): Post[] {
  return getAllPosts().filter((post) => post.frontmatter.tags.includes(tag));
}

export function getFeaturedPosts(): Post[] {
  return getAllPosts().filter((post) => post.frontmatter.featured);
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagsSet = new Set<string>();
  posts.forEach((post) => {
    post.frontmatter.tags.forEach((tag) => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
}

export function searchPosts(query: string): Post[] {
  const lowercaseQuery = query.toLowerCase();
  return getAllPosts().filter((post) => {
    const { title, summary, tags, category } = post.frontmatter;
    return (
      title.toLowerCase().includes(lowercaseQuery) ||
      summary.toLowerCase().includes(lowercaseQuery) ||
      tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)) ||
      category.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery)
    );
  });
}
