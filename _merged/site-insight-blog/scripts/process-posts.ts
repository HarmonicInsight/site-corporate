/**
 * Process Posts Script
 *
 * Converts JSON posts to MDX files and generates thumbnails.
 *
 * Usage:
 *   npm run posts:process              # Process all JSON files in content/drafts/
 *   npm run posts:process -- --file=mypost.json  # Process specific file
 *   npm run posts:process -- --dry-run # Preview without writing files
 *
 * Environment variables:
 *   STABILITY_API_KEY - For Stability AI image generation
 *   OPENAI_API_KEY - For DALL-E image generation (alternative)
 *   CLOUDFLARE_ACCOUNT_ID + CLOUDFLARE_AI_TOKEN - For Cloudflare AI
 */

import fs from 'fs';
import path from 'path';

// Types
interface ContentBlock {
  type: 'paragraph' | 'heading' | 'list' | 'code' | 'blockquote' | 'image' | 'amazon';
  text?: string;
  level?: number;
  items?: string[];
  ordered?: boolean;
  language?: string;
  code?: string;
  url?: string;
  alt?: string;
  caption?: string;
  asin?: string;
  title?: string;
}

interface PostData {
  title: string;
  slug: string;
  category: string;
  tags: string[];
  date: string;
  summary: string;
  author: string;
  featured?: boolean;
  draft?: boolean;
  amazon_asin?: string;
  app_store_url?: string;
  play_store_url?: string;
  windows_url?: string;
  thumbnail?: string;
  generate_thumbnail?: boolean;
  thumbnail_prompt?: string;
  content: ContentBlock[];
}

interface PostsFile {
  posts: PostData[];
}

// Directories
const DRAFTS_DIR = path.join(process.cwd(), 'content/drafts');
const POSTS_DIR = path.join(process.cwd(), 'content/posts');
const IMAGES_DIR = path.join(process.cwd(), 'public/images/generated');

// Category prompts for image generation
const categoryPrompts: Record<string, string> = {
  books: 'elegant book cover, open book, reading, knowledge, minimalist design',
  apps: 'modern smartphone app interface, mobile technology, sleek UI design',
  'core-systems': 'enterprise software dashboard, data visualization, corporate technology',
  consulting: 'professional business meeting, strategy planning, corporate environment',
  research: 'scientific research, data analysis, charts and graphs, laboratory',
  ai: 'artificial intelligence, neural network visualization, futuristic technology',
  column: 'creative writing, pen and paper, thoughtful workspace, coffee',
};

/**
 * Convert content blocks to MDX content
 */
function contentToMdx(blocks: ContentBlock[]): string {
  return blocks.map((block) => {
    switch (block.type) {
      case 'heading':
        const hashes = '#'.repeat(block.level || 2);
        return `${hashes} ${block.text}\n`;

      case 'paragraph':
        return `${block.text}\n`;

      case 'list':
        const prefix = block.ordered ? (i: number) => `${i + 1}.` : () => '-';
        return block.items?.map((item, i) => `${prefix(i)} ${item}`).join('\n') + '\n';

      case 'code':
        return `\`\`\`${block.language || ''}\n${block.code}\n\`\`\`\n`;

      case 'blockquote':
        return `> ${block.text}\n`;

      case 'image':
        let img = `![${block.alt}](${block.url})`;
        if (block.caption) {
          img += `\n*${block.caption}*`;
        }
        return img + '\n';

      case 'amazon':
        return `<AmazonEmbed asin="${block.asin}" title="${block.title || ''}" />\n`;

      default:
        return '';
    }
  }).join('\n');
}

/**
 * Generate MDX frontmatter
 */
function generateFrontmatter(post: PostData): string {
  const fm: Record<string, unknown> = {
    title: post.title,
    slug: post.slug,
    category: post.category,
    tags: post.tags,
    date: post.date,
    thumbnail: post.thumbnail || '',
    summary: post.summary,
    author: post.author,
    featured: post.featured || false,
    draft: post.draft !== false, // Default to true (drafts) unless explicitly set to false
  };

  if (post.amazon_asin) fm.amazon_asin = post.amazon_asin;
  if (post.app_store_url) fm.app_store_url = post.app_store_url;
  if (post.play_store_url) fm.play_store_url = post.play_store_url;
  if (post.windows_url) fm.windows_url = post.windows_url;

  const lines = Object.entries(fm).map(([key, value]) => {
    if (Array.isArray(value)) {
      return `${key}: ${JSON.stringify(value)}`;
    }
    if (typeof value === 'boolean') {
      return `${key}: ${value}`;
    }
    return `${key}: "${value}"`;
  });

  return `---\n${lines.join('\n')}\n---`;
}

/**
 * Generate thumbnail prompt from post data
 */
function generateThumbnailPrompt(post: PostData): string {
  if (post.thumbnail_prompt) {
    return post.thumbnail_prompt;
  }

  const categoryHint = categoryPrompts[post.category] || 'professional blog post';
  const tagHints = post.tags.slice(0, 3).join(', ');

  return `${categoryHint}, representing "${post.title}", ${tagHints}, professional quality, clean composition, warm orange and white color scheme, 16:9 aspect ratio`;
}

/**
 * Generate thumbnail using available AI service
 */
async function generateThumbnail(prompt: string, outputPath: string): Promise<boolean> {
  console.log(`  Generating thumbnail...`);
  console.log(`  Prompt: ${prompt.substring(0, 100)}...`);

  // Try Stability AI
  if (process.env.STABILITY_API_KEY) {
    try {
      const response = await fetch(
        'https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
          },
          body: JSON.stringify({
            text_prompts: [
              { text: prompt, weight: 1 },
              { text: 'blurry, low quality, text, watermark, signature, ugly', weight: -1 },
            ],
            cfg_scale: 7,
            height: 576,
            width: 1024,
            samples: 1,
            steps: 30,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const imageData = data.artifacts[0].base64;
        fs.writeFileSync(outputPath, Buffer.from(imageData, 'base64'));
        console.log(`  ✅ Generated with Stability AI`);
        return true;
      }
    } catch (error) {
      console.error(`  ⚠️ Stability AI failed:`, error);
    }
  }

  // Try OpenAI DALL-E
  if (process.env.OPENAI_API_KEY) {
    try {
      const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'dall-e-3',
          prompt: prompt,
          n: 1,
          size: '1792x1024',
          quality: 'standard',
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const imageUrl = data.data[0].url;

        // Download image
        const imageResponse = await fetch(imageUrl);
        const imageBuffer = await imageResponse.arrayBuffer();
        fs.writeFileSync(outputPath, Buffer.from(imageBuffer));
        console.log(`  ✅ Generated with DALL-E`);
        return true;
      }
    } catch (error) {
      console.error(`  ⚠️ DALL-E failed:`, error);
    }
  }

  // Try Cloudflare AI
  if (process.env.CLOUDFLARE_ACCOUNT_ID && process.env.CLOUDFLARE_AI_TOKEN) {
    try {
      const response = await fetch(
        `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/ai/run/@cf/stabilityai/stable-diffusion-xl-base-1.0`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.CLOUDFLARE_AI_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt,
            negative_prompt: 'blurry, low quality, text, watermark',
            height: 576,
            width: 1024,
          }),
        }
      );

      if (response.ok) {
        const imageBuffer = await response.arrayBuffer();
        fs.writeFileSync(outputPath, Buffer.from(imageBuffer));
        console.log(`  ✅ Generated with Cloudflare AI`);
        return true;
      }
    } catch (error) {
      console.error(`  ⚠️ Cloudflare AI failed:`, error);
    }
  }

  console.log(`  ⚠️ No AI service available for thumbnail generation`);
  return false;
}

/**
 * Process a single post
 */
async function processPost(post: PostData, dryRun: boolean): Promise<void> {
  console.log(`\n📝 Processing: ${post.title}`);
  console.log(`   Slug: ${post.slug}`);
  console.log(`   Category: ${post.category}`);

  // Generate MDX content
  const frontmatter = generateFrontmatter(post);
  const content = contentToMdx(post.content);
  const mdxContent = `${frontmatter}\n\n${content}`;

  const mdxPath = path.join(POSTS_DIR, `${post.slug}.mdx`);

  if (dryRun) {
    console.log(`   [DRY RUN] Would write to: ${mdxPath}`);
    console.log(`   Preview:\n${mdxContent.substring(0, 500)}...`);
  } else {
    fs.writeFileSync(mdxPath, mdxContent, 'utf8');
    console.log(`   ✅ MDX saved: ${mdxPath}`);
  }

  // Generate thumbnail if requested
  if (post.generate_thumbnail !== false && !post.thumbnail) {
    const thumbnailPath = path.join(IMAGES_DIR, `${post.slug}.png`);

    if (fs.existsSync(thumbnailPath)) {
      console.log(`   ⏭️ Thumbnail already exists`);
    } else if (dryRun) {
      console.log(`   [DRY RUN] Would generate thumbnail: ${thumbnailPath}`);
    } else {
      const prompt = generateThumbnailPrompt(post);
      await generateThumbnail(prompt, thumbnailPath);

      // Rate limiting
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }
}

/**
 * Main function
 */
async function main(): Promise<void> {
  console.log('🚀 InsightBlog Post Processor\n');

  // Parse arguments
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const fileArg = args.find((a) => a.startsWith('--file='));
  const specificFile = fileArg ? fileArg.split('=')[1] : null;

  if (dryRun) {
    console.log('🔍 DRY RUN MODE - No files will be written\n');
  }

  // Ensure directories exist
  if (!dryRun) {
    if (!fs.existsSync(POSTS_DIR)) fs.mkdirSync(POSTS_DIR, { recursive: true });
    if (!fs.existsSync(IMAGES_DIR)) fs.mkdirSync(IMAGES_DIR, { recursive: true });
  }

  // Find JSON files to process
  let jsonFiles: string[];
  if (specificFile) {
    jsonFiles = [path.join(DRAFTS_DIR, specificFile)];
  } else {
    const files = fs.readdirSync(DRAFTS_DIR);
    jsonFiles = files
      .filter((f) => f.endsWith('.json') && !f.includes('schema') && !f.includes('template'))
      .map((f) => path.join(DRAFTS_DIR, f));
  }

  if (jsonFiles.length === 0) {
    console.log('📭 No JSON files found to process.');
    console.log('   Create a JSON file in content/drafts/ based on posts-template.json');
    return;
  }

  console.log(`📁 Found ${jsonFiles.length} file(s) to process\n`);

  // Process each file
  for (const jsonFile of jsonFiles) {
    if (!fs.existsSync(jsonFile)) {
      console.error(`❌ File not found: ${jsonFile}`);
      continue;
    }

    console.log(`\n📄 Reading: ${path.basename(jsonFile)}`);

    try {
      const content = fs.readFileSync(jsonFile, 'utf8');
      const data: PostsFile = JSON.parse(content);

      if (!data.posts || !Array.isArray(data.posts)) {
        console.error(`❌ Invalid format: missing 'posts' array`);
        continue;
      }

      console.log(`   Contains ${data.posts.length} post(s)`);

      for (const post of data.posts) {
        await processPost(post, dryRun);
      }
    } catch (error) {
      console.error(`❌ Error processing ${jsonFile}:`, error);
    }
  }

  console.log('\n✨ Processing complete!');

  if (!dryRun) {
    console.log('\nNext steps:');
    console.log('  1. Run `npm run dev` to preview');
    console.log('  2. Run `npm run build` to build');
  }
}

main().catch(console.error);
