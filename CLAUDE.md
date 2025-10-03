# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

Saralテーマを使用したAstro製の個人ブログサイトです。MDXサポート、ダークモード、RSSフィード、自動読書時間計算機能を備えた静的サイトジェネレータープロジェクトです。

## よく使うコマンド

### 開発
- `npm run dev` または `npm start` - 開発サーバーを起動
- `npm run build` - 型チェックとビルド（ビルド前に `astro check` を実行）
- `npm run preview` - プロダクションビルドをローカルでプレビュー

### コード品質
- `npm run lint` - コードをLint（JS, JSX, TS, TSX, Astroファイル）
- `npm run lint:fix` - Lintエラーを自動修正
- `npm run format` - Prettierでコードをフォーマット
- `npm run format:check` - コードフォーマットをチェック

## アーキテクチャ

### コンテンツ管理
- ブログ記事は `src/content/blog/` に `.md` または `.mdx` ファイルとして配置
- コンテンツスキーマは `src/content/config.ts` でZodを使用して定義
- 各ブログ記事に必要なフィールド: `title`、`description`、`pubDate`、オプションで `updatedDate`、`coverImageCredit`
- ブログ記事のURLはファイル名から生成される（例: `my-post.md` → `/blog/my-post`）

### カスタムRemarkプラグイン
`src/plugins/` にある2つのカスタムプラグインがビルド時にブログ記事を拡張:
- **remark-reading-time.mjs** - 読書時間を計算してfrontmatterに注入（`minutesRead`）
- **remark-modified-time.mjs** - gitの履歴を照会して最終更新日を注入（`lastModified`）

### レイアウト
- **BaseLayout.astro** - すべてのページの基本レイアウト（メタデータ、フォント、ダークモード対応）
- **BlogPostLayout.astro** - BaseLayoutをラップし、ブログ固有の機能を追加（読書時間、最終更新日、カバー画像）

### 設定
- `src/consts.ts` - サイトタイトル、説明、ベースパス、ソーシャルリンク、ナビゲーションの中央設定
- `astro.config.mjs` - MDX、sitemap、Partytown、rehype/remarkプラグインを含むAstro設定
- **重要**: サブディレクトリにデプロイする場合は `src/consts.ts` の `SITE_BASE` を更新（ルートドメインの場合は空文字列）

### スタイリング
- Viteプラグイン経由でTailwind CSS v4を使用
- プロースコンテンツスタイリング用のTypographyプラグイン
- カスタムフォント: Inter Variable、JetBrains Mono Variable、Silkscreen

### ブログ記事の追加方法
1. `src/content/blog/` に `your-slug.md` を作成
2. 必須フィールドを含むfrontmatterを追加
3. `src/assets/blogimages/<your-slug>/cover.jpg` にカバー画像を追加（推奨サイズ: 853x480px）
4. Markdown内で画像を参照: `![Alt](../../assets/blogimages/<your-slug>/image.ext)`

### アセット管理
- ブログ画像は `src/assets/blogimages/<slug>/` に保存
- Astroがビルド時に画像を最適化
- ブログ記事ファイルから相対パスで画像を参照

## 重要な注意事項
- パッケージマネージャー: Yarn 1.22.22
- プロダクションデプロイ前に `src/components/BaseHead.astro` から `<meta name="robots" content="noindex" />` を削除すること
- サイトはgitベースの最終更新日を使用するため、正確な更新時刻を表示するにはブログ記事をコミットする必要がある
