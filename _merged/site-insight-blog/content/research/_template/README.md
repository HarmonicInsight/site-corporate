# リサーチフォルダテンプレート

## 使い方

1. このフォルダをコピーして `YYYY-MM-DD-トピック名` の形式でリネーム
2. `config.json` を編集（タイトル、カテゴリ等）
3. リサーチ結果のファイルを追加:
   - `gemini.md` - Gemini Deep Research結果
   - `claude.md` - Claude結果
   - `chatgpt.md` - ChatGPT結果
   - その他 `.md` や `.txt` ファイル

4. コマンド実行:
   ```bash
   npm run research:process
   ```

## config.json の説明

| フィールド | 説明 | 必須 |
|-----------|------|------|
| title | 記事タイトル | ✅ |
| slug | URL用スラッグ（英数字-のみ） | ✅ |
| category | カテゴリ | ✅ |
| tags | タグ配列 | ✅ |
| author | 著者名 | ✅ |
| featured | 注目記事フラグ | |
| notes | 補足メモ（AIへの指示） | |

## カテゴリ一覧

- `books` - 書籍紹介
- `apps` - アプリ紹介
- `core-systems` - 基幹システム
- `consulting` - コンサルティング
- `research` - リサーチ
- `ai` - AI活用
- `column` - コラム
