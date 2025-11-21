# Resume Site

個人の職務経歴書サイト。Astro + Tailwind CSS + MDX で構築。

## 技術スタック

- Astro v4
- Tailwind CSS
- MDX
- TypeScript

## 開発

```bash
npm install
npm run dev
```

## デプロイ

GitHub Actions で自動デプロイ（GitHub Pages）

- `main` ブランチへの push で自動ビルド・デプロイ
- デプロイ先: https://iakito-dev.github.io/Resume_JP/

## コンテンツ編集

各セクションのコンテンツは `src/content/resume/` ディレクトリ内の MDX ファイルで管理。

- `summary.mdx` - プロフィール
- `experience.mdx` - 職務経歴
- `projects.mdx` - 個人プロジェクト
- `skills.mdx` - スキルサマリー
- `strengths.mdx` - 強み・特性
- `education.mdx` - 学歴
- `certifications.mdx` - 資格
- `links.mdx` - 言語スキル

英語版は `src/content/resume/en/` ディレクトリ内。
