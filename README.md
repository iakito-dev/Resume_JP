# Astro Resume Site

シンプル・高速・ミニマルな静的 Resume サイト。Astro v4、Tailwind CSS、MDX を使用して構築されています。

## 特徴

- ⚡️ Astro v4 による高速な静的サイト生成
- 🎨 Tailwind CSS によるモダンなデザイン
- 📝 MDX によるコンテンツ管理
- 🌙 ダークモード対応
- 📱 レスポンシブデザイン
- 🖨️ PDF出力対応（職務経歴書として使用可能）
- 🔍 SEO / OGP 対応

## セットアップ

### 必要な環境

- Node.js 22.21.0 以上
- npm または yarn

### インストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:4321` を開きます。

### ビルド

```bash
npm run build
```

ビルド後のサイトをローカルでプレビューします。

## OGP画像生成

```bash
npm run generate:og
```

`public/og-image.png` が生成されます。必要に応じてスクリプトを編集してカスタマイズしてください。

## Favicon

`public/favicon.ico` を実際のfaviconファイルに置き換えてください。
オンラインツール（例: [Favicon Generator](https://favicon.io/)）を使用して生成できます。

## カスタマイズ

### プロフィール情報の変更

`src/pages/index.astro` の `profile` オブジェクトを編集してください。

```astro
const profile = {
  name: 'Your Name',
  title: 'Your Title',
  socialLinks: {
    github: 'https://github.com/yourusername',
    // ...
  },
};
```

### コンテンツの編集

各セクションのコンテンツは `src/content/resume/` ディレクトリ内の MDX ファイルで管理されています。

- `summary.mdx` - プロフィール
- `projects.mdx` - 個人プロジェクト
- `experience.mdx` - 職務経歴
- `education.mdx` - 学歴
- `certifications.mdx` - 資格
- `skills.mdx` - スキルサマリー
- `strengths.mdx` - 強み・特性
- `links.mdx` - 言語スキル

### スタイルのカスタマイズ

- `src/styles/global.css` - グローバルスタイル
- `tailwind.config.mjs` - Tailwind設定

## PDF出力（職務経歴書として）

このサイトはPDFとして職務経歴書を出力できるように設計されています。

### ブラウザからPDF出力

1. 開発サーバーを起動: `npm run dev`
2. ブラウザで `http://localhost:4321` を開く
3. ブラウザの印刷機能を使用（Cmd+P / Ctrl+P）
4. 「送信先」で「PDFに保存」を選択
5. 「詳細設定」で以下を設定：
   - 用紙サイズ: A4
   - 余白: 標準またはカスタム（推奨: 15mm）
   - 背景のグラフィック: オン（色を保持）
6. 「保存」をクリック

### PDF出力時の注意点

- 印刷時に自動的にライトモードに切り替わります
- テーマ切替ボタンとフッターは自動的に非表示になります
- リンクは下線付きのテキストとして表示されます
- 画像は適切なサイズで表示されます

## デプロイ

### Vercel

1. GitHubリポジトリにプッシュ
2. [Vercel](https://vercel.com) にログイン
3. 「New Project」をクリック
4. リポジトリを選択
5. 設定を確認して「Deploy」をクリック

Vercelは自動的にAstroプロジェクトを検出し、適切な設定でデプロイします。

## ライセンス

MIT

