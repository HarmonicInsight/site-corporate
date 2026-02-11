/**
 * Image Tasks Generator
 *
 * Generates a checklist of images needed for draft posts.
 * User works through the list, creating images and saving to specified paths.
 * Once all images are ready, run `npm run posts:publish` to publish.
 *
 * Usage:
 *   npm run images:tasks          # Generate image task list
 *   npm run images:tasks -- --check  # Check which images are complete
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_DIR = path.join(process.cwd(), 'content/posts');
const IMAGES_DIR = path.join(process.cwd(), 'public/images/generated');
const OUTPUT_FILE = path.join(process.cwd(), 'content/drafts/image-tasks.md');

interface PostFrontmatter {
  title: string;
  slug: string;
  category: string;
  tags: string[];
  thumbnail: string;
  draft?: boolean;
}

const categoryPrompts: Record<string, string> = {
  books: 'elegant book cover design, open book with glowing pages, knowledge and wisdom theme, minimalist',
  apps: 'modern smartphone showing app interface, sleek mobile UI design, technology theme',
  'core-systems':
    'enterprise software dashboard, data flow visualization, corporate technology, network connections',
  consulting: 'professional business strategy meeting, planning diagram, corporate environment, suits',
  research: 'scientific research visualization, data analysis charts, laboratory equipment, discovery theme',
  ai: 'artificial intelligence concept, neural network nodes, futuristic technology, glowing circuits',
  column: 'creative writing workspace, vintage typewriter or modern laptop, coffee cup, thoughtful atmosphere',
};

const stylePrompts = [
  'professional quality',
  'clean composition',
  'warm orange (#ea580c) and white color accents',
  '16:9 aspect ratio',
  'no text or watermarks',
  'high resolution',
  'modern minimalist style',
];

function generatePrompt(post: PostFrontmatter): string {
  const categoryHint = categoryPrompts[post.category] || 'professional blog thumbnail';
  const tagContext = post.tags.slice(0, 3).join(', ');

  return [categoryHint, `Theme: "${post.title}"`, `Keywords: ${tagContext}`, ...stylePrompts].join(', ');
}

interface ImageTask {
  post: PostFrontmatter;
  prompt: string;
  filePath: string;
  relativePath: string;
  exists: boolean;
}

function getImageTasks(): ImageTask[] {
  let files: string[];
  try {
    files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.mdx'));
  } catch {
    return [];
  }

  const tasks: ImageTask[] = [];

  for (const file of files) {
    const content = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');
    const { data } = matter(content);
    const post = data as PostFrontmatter;

    // Only include draft posts that need thumbnails
    if (!post.draft) continue;

    const filePath = path.join(IMAGES_DIR, `${post.slug}.png`);
    const relativePath = `public/images/generated/${post.slug}.png`;
    const exists = fs.existsSync(filePath);

    // Skip if already has a custom thumbnail
    if (post.thumbnail && !post.thumbnail.includes('/generated/')) continue;

    tasks.push({
      post,
      prompt: generatePrompt(post),
      filePath,
      relativePath,
      exists,
    });
  }

  return tasks;
}

function generateTaskList(tasks: ImageTask[], checkOnly: boolean): void {
  const pending = tasks.filter((t) => !t.exists);
  const complete = tasks.filter((t) => t.exists);

  console.log('🖼️  Image Tasks Generator\n');
  console.log(`📊 Status: ${complete.length}/${tasks.length} complete\n`);

  if (checkOnly) {
    if (pending.length === 0) {
      console.log('✅ All images are ready!');
      console.log('   Run `npm run posts:publish` to publish the drafts.\n');
    } else {
      console.log(`⏳ ${pending.length} image(s) still needed:\n`);
      for (const task of pending) {
        console.log(`   - ${task.post.title}`);
        console.log(`     ${task.relativePath}\n`);
      }
    }
    return;
  }

  if (pending.length === 0) {
    console.log('✅ All draft posts have images!');
    console.log('   Run `npm run posts:publish` to publish.\n');
    return;
  }

  // Generate markdown task list
  const lines: string[] = [
    '# 画像作成タスク一覧',
    '',
    `生成日時: ${new Date().toLocaleString('ja-JP')}`,
    '',
    `## 進捗: ${complete.length}/${tasks.length} 完了`,
    '',
  ];

  if (complete.length > 0) {
    lines.push('### ✅ 完了');
    lines.push('');
    for (const task of complete) {
      lines.push(`- [x] ${task.post.title}`);
    }
    lines.push('');
  }

  lines.push('### ⏳ 作業待ち');
  lines.push('');

  for (let i = 0; i < pending.length; i++) {
    const task = pending[i];
    lines.push(`---`);
    lines.push('');
    lines.push(`## ${i + 1}. ${task.post.title}`);
    lines.push('');
    lines.push(`**カテゴリ:** ${task.post.category}`);
    lines.push(`**タグ:** ${task.post.tags.join(', ')}`);
    lines.push('');
    lines.push('**保存先:**');
    lines.push('```');
    lines.push(task.relativePath);
    lines.push('```');
    lines.push('');
    lines.push('**プロンプト:**');
    lines.push('```');
    lines.push(task.prompt);
    lines.push('```');
    lines.push('');
    lines.push('**作業手順:**');
    lines.push('1. 上記プロンプトをAI画像生成ツールにコピー');
    lines.push('2. 画像を生成（Midjourney, DALL-E, Stable Diffusion等）');
    lines.push(`3. ファイル名を \`${task.post.slug}.png\` にして保存`);
    lines.push(`4. \`${path.dirname(task.relativePath)}/\` フォルダに配置`);
    lines.push('');
  }

  lines.push('---');
  lines.push('');
  lines.push('## 完了後の手順');
  lines.push('');
  lines.push('全ての画像を配置したら:');
  lines.push('');
  lines.push('```bash');
  lines.push('# 画像の配置を確認');
  lines.push('npm run images:tasks -- --check');
  lines.push('');
  lines.push('# ドラフトを公開');
  lines.push('npm run posts:publish');
  lines.push('```');

  // Write to file
  fs.writeFileSync(OUTPUT_FILE, lines.join('\n'), 'utf8');
  console.log(`📝 Task list saved: ${OUTPUT_FILE}\n`);

  // Console summary
  console.log('='.repeat(60));
  console.log('');
  for (let i = 0; i < pending.length; i++) {
    const task = pending[i];
    console.log(`📷 ${i + 1}. ${task.post.title}`);
    console.log(`   保存先: ${task.relativePath}`);
    console.log('');
  }
  console.log('='.repeat(60));
  console.log('');
  console.log('📋 詳細なプロンプトは以下のファイルを参照:');
  console.log(`   ${OUTPUT_FILE}`);
  console.log('');
  console.log('✨ 画像完成後: npm run posts:publish');
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const checkOnly = args.includes('--check');

  // Ensure directories exist
  if (!fs.existsSync(IMAGES_DIR)) {
    fs.mkdirSync(IMAGES_DIR, { recursive: true });
  }

  const tasks = getImageTasks();

  if (tasks.length === 0) {
    console.log('🖼️  Image Tasks Generator\n');
    console.log('📭 No draft posts found that need images.');
    console.log('   Create posts with `npm run posts:process` first.\n');
    return;
  }

  generateTaskList(tasks, checkOnly);
}

main().catch(console.error);
