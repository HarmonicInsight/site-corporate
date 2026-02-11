/**
 * Publish Posts Script
 *
 * Checks draft posts for completed thumbnails and publishes them.
 * Changes draft: true to draft: false in the MDX frontmatter.
 *
 * Usage:
 *   npm run posts:publish          # Publish drafts with images
 *   npm run posts:publish -- --all # Publish all drafts (even without images)
 *   npm run posts:publish -- --dry-run  # Preview without changes
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_DIR = path.join(process.cwd(), 'content/posts');
const IMAGES_DIR = path.join(process.cwd(), 'public/images/generated');

interface PostFrontmatter {
  title: string;
  slug: string;
  category: string;
  tags: string[];
  date: string;
  thumbnail: string;
  summary: string;
  author: string;
  featured?: boolean;
  draft?: boolean;
  amazon_asin?: string;
  app_store_url?: string;
  play_store_url?: string;
  windows_url?: string;
}

interface DraftPost {
  file: string;
  frontmatter: PostFrontmatter;
  content: string;
  hasImage: boolean;
  imagePath: string;
}

function getDraftPosts(): DraftPost[] {
  let files: string[];
  try {
    files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.mdx'));
  } catch {
    return [];
  }

  const drafts: DraftPost[] = [];

  for (const file of files) {
    const filePath = path.join(POSTS_DIR, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    const frontmatter = data as PostFrontmatter;

    if (!frontmatter.draft) continue;

    const imagePath = path.join(IMAGES_DIR, `${frontmatter.slug}.png`);
    const hasImage =
      fs.existsSync(imagePath) || (frontmatter.thumbnail && !frontmatter.thumbnail.includes('/generated/'));

    drafts.push({
      file,
      frontmatter,
      content,
      hasImage: !!hasImage,
      imagePath: `public/images/generated/${frontmatter.slug}.png`,
    });
  }

  return drafts;
}

function publishPost(draft: DraftPost, dryRun: boolean): boolean {
  const filePath = path.join(POSTS_DIR, draft.file);

  // Update frontmatter
  const updatedFrontmatter = {
    ...draft.frontmatter,
    draft: false,
  };

  // If using generated image, set thumbnail path
  if (!draft.frontmatter.thumbnail) {
    updatedFrontmatter.thumbnail = `/images/generated/${draft.frontmatter.slug}.png`;
  }

  // Rebuild the file
  const lines = Object.entries(updatedFrontmatter).map(([key, value]) => {
    if (Array.isArray(value)) {
      return `${key}: ${JSON.stringify(value)}`;
    }
    if (typeof value === 'boolean') {
      return `${key}: ${value}`;
    }
    return `${key}: "${value}"`;
  });

  const newContent = `---\n${lines.join('\n')}\n---\n\n${draft.content}`;

  if (dryRun) {
    console.log(`   [DRY RUN] Would publish: ${draft.file}`);
    return true;
  }

  fs.writeFileSync(filePath, newContent, 'utf8');
  return true;
}

async function main(): Promise<void> {
  console.log('📤 Publish Posts\n');

  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const publishAll = args.includes('--all');

  if (dryRun) {
    console.log('🔍 DRY RUN MODE - No files will be modified\n');
  }

  const drafts = getDraftPosts();

  if (drafts.length === 0) {
    console.log('📭 No draft posts found.');
    console.log('   All posts are already published!\n');
    return;
  }

  const ready = drafts.filter((d) => d.hasImage);
  const notReady = drafts.filter((d) => !d.hasImage);

  console.log(`📊 Status:`);
  console.log(`   ${drafts.length} draft(s) total`);
  console.log(`   ${ready.length} ready to publish (have images)`);
  console.log(`   ${notReady.length} waiting for images\n`);

  // Show not ready
  if (notReady.length > 0 && !publishAll) {
    console.log('⏳ Waiting for images:');
    for (const draft of notReady) {
      console.log(`   - ${draft.frontmatter.title}`);
      console.log(`     Missing: ${draft.imagePath}`);
    }
    console.log('');
  }

  // Publish ready posts
  const toPublish = publishAll ? drafts : ready;

  if (toPublish.length === 0) {
    console.log('❌ No posts ready to publish.');
    console.log('   Run `npm run images:tasks` to see what images are needed.\n');
    return;
  }

  console.log(`📤 Publishing ${toPublish.length} post(s):\n`);

  let published = 0;
  for (const draft of toPublish) {
    console.log(`   📝 ${draft.frontmatter.title}`);

    if (!draft.hasImage && !publishAll) {
      console.log(`      ⏭️ Skipped (no image)`);
      continue;
    }

    if (publishPost(draft, dryRun)) {
      published++;
      console.log(`      ✅ Published`);
    } else {
      console.log(`      ❌ Failed`);
    }
  }

  console.log('');
  console.log('='.repeat(60));
  console.log(`✨ ${dryRun ? 'Would publish' : 'Published'} ${published} post(s)`);

  if (!dryRun && published > 0) {
    console.log('');
    console.log('Next steps:');
    console.log('  1. Run `npm run build` to rebuild the site');
    console.log('  2. Deploy to Vercel');
  }

  console.log('='.repeat(60));
}

main().catch(console.error);
