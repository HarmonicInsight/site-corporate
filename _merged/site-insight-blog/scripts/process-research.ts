/**
 * Research to Article Processor
 *
 * Reads research materials and generates prompts for article creation.
 * User uses the prompt with their preferred AI (Claude Code, ChatGPT, etc.)
 *
 * Usage:
 *   npm run research:process              # Process all research folders
 *   npm run research:process -- --folder=2025-01-03-ai-trends  # Specific folder
 *
 * Output: Markdown file with AI prompt for each research folder
 */

import fs from 'fs';
import path from 'path';

const RESEARCH_DIR = path.join(process.cwd(), 'content/research');
const OUTPUT_DIR = path.join(process.cwd(), 'content/drafts');

interface ResearchConfig {
  title: string;
  slug: string;
  category: string;
  tags: string[];
  author: string;
  featured?: boolean;
  notes?: string;
}

interface ResearchSource {
  filename: string;
  content: string;
}

interface ResearchFolder {
  name: string;
  config: ResearchConfig;
  sources: ResearchSource[];
}

function readResearchFolder(folderPath: string): ResearchFolder | null {
  const folderName = path.basename(folderPath);

  // Skip template folder
  if (folderName.startsWith('_')) {
    return null;
  }

  // Read config.json
  const configPath = path.join(folderPath, 'config.json');
  if (!fs.existsSync(configPath)) {
    console.log(`  ⚠️ Skipping ${folderName}: no config.json`);
    return null;
  }

  let config: ResearchConfig;
  try {
    config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  } catch (error) {
    console.log(`  ❌ Error parsing config.json in ${folderName}`);
    return null;
  }

  // Read all source files (.md, .txt)
  const files = fs.readdirSync(folderPath);
  const sources: ResearchSource[] = [];

  for (const file of files) {
    if (file === 'config.json' || file === 'README.md') continue;
    if (!file.endsWith('.md') && !file.endsWith('.txt')) continue;

    const filePath = path.join(folderPath, file);
    const content = fs.readFileSync(filePath, 'utf8');
    sources.push({ filename: file, content });
  }

  if (sources.length === 0) {
    console.log(`  ⚠️ Skipping ${folderName}: no source files`);
    return null;
  }

  return { name: folderName, config, sources };
}

function generateArticlePrompt(research: ResearchFolder): string {
  const { config, sources } = research;
  const today = new Date().toISOString().split('T')[0];

  const sourceContents = sources
    .map((s) => `### ${s.filename}\n\n${s.content}`)
    .join('\n\n---\n\n');

  const prompt = `
# 記事作成依頼

以下のリサーチ結果を統合・要約して、ブログ記事をJSON形式で作成してください。

## 記事メタデータ

- **タイトル**: ${config.title}
- **スラッグ**: ${config.slug}
- **カテゴリ**: ${config.category}
- **タグ**: ${config.tags.join(', ')}
- **著者**: ${config.author}
- **日付**: ${today}
- **注目記事**: ${config.featured ? 'はい' : 'いいえ'}
${config.notes ? `- **補足メモ**: ${config.notes}` : ''}

## リサーチ素材

${sourceContents}

---

## 出力形式

以下のJSON形式で記事を出力してください:

\`\`\`json
{
  "posts": [
    {
      "title": "${config.title}",
      "slug": "${config.slug}",
      "category": "${config.category}",
      "tags": ${JSON.stringify(config.tags)},
      "date": "${today}",
      "summary": "50〜100文字の要約文",
      "author": "${config.author}",
      "featured": ${config.featured || false},
      "generate_thumbnail": true,
      "content": [
        { "type": "heading", "level": 2, "text": "セクション見出し" },
        { "type": "paragraph", "text": "本文..." },
        { "type": "list", "items": ["項目1", "項目2"] },
        { "type": "blockquote", "text": "重要な引用" }
      ]
    }
  ]
}
\`\`\`

## 記事作成の指針

1. **要約と統合**: 複数のリサーチ結果を統合し、重複を排除
2. **構成**: 概要→ポイント→詳細→まとめ の流れ
3. **読みやすさ**: 専門用語は解説を加える
4. **実用性**: 読者がアクションを取れる内容に
5. **分量**: 1500〜3000文字程度

JSONのみを出力してください。説明は不要です。
`;

  return prompt.trim();
}

async function main(): Promise<void> {
  console.log('📚 Research to Article Processor\n');

  // Parse arguments
  const args = process.argv.slice(2);
  const folderArg = args.find((a) => a.startsWith('--folder='));
  const specificFolder = folderArg ? folderArg.split('=')[1] : null;

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Find research folders
  let folders: string[];
  if (specificFolder) {
    folders = [path.join(RESEARCH_DIR, specificFolder)];
  } else {
    try {
      const items = fs.readdirSync(RESEARCH_DIR);
      folders = items
        .filter((item) => {
          const itemPath = path.join(RESEARCH_DIR, item);
          return fs.statSync(itemPath).isDirectory() && !item.startsWith('_');
        })
        .map((item) => path.join(RESEARCH_DIR, item));
    } catch {
      console.log('No research folders found. Create one in content/research/');
      return;
    }
  }

  if (folders.length === 0) {
    console.log('📭 No research folders to process.');
    console.log('   Copy content/research/_template/ to get started.');
    return;
  }

  console.log(`📁 Found ${folders.length} folder(s) to process\n`);

  const processedPrompts: { name: string; outputFile: string; prompt: string }[] = [];

  for (const folderPath of folders) {
    if (!fs.existsSync(folderPath)) {
      console.log(`❌ Folder not found: ${folderPath}`);
      continue;
    }

    console.log(`\n📂 Processing: ${path.basename(folderPath)}`);

    const research = readResearchFolder(folderPath);
    if (!research) continue;

    console.log(`   Title: ${research.config.title}`);
    console.log(`   Sources: ${research.sources.map((s) => s.filename).join(', ')}`);

    const prompt = generateArticlePrompt(research);
    const outputFile = path.join(OUTPUT_DIR, `prompt-${research.config.slug}.md`);

    fs.writeFileSync(outputFile, prompt, 'utf8');
    console.log(`   ✅ Prompt saved: ${outputFile}`);

    processedPrompts.push({
      name: research.config.title,
      outputFile,
      prompt,
    });
  }

  if (processedPrompts.length === 0) {
    console.log('\n⚠️ No prompts generated.');
    return;
  }

  console.log('\n' + '='.repeat(60));
  console.log('✨ Processing complete!\n');
  console.log('Next steps:');
  console.log('');
  console.log('1. Open the generated prompt file(s):');
  for (const { name, outputFile } of processedPrompts) {
    console.log(`   - ${name}`);
    console.log(`     ${outputFile}`);
  }
  console.log('');
  console.log('2. Copy the prompt and use with your preferred AI:');
  console.log('   - Claude Code: Paste the prompt directly');
  console.log('   - ChatGPT: Paste in chat');
  console.log('   - Claude.ai: Paste in conversation');
  console.log('');
  console.log('3. Save the AI output as JSON in content/drafts/');
  console.log('');
  console.log('4. Run: npm run posts:process');
  console.log('');
  console.log('='.repeat(60));
}

main().catch(console.error);
