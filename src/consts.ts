// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Saral Theme'
export const SITE_DESCRIPTION =
	'A simple theme for personal blog sites, created for Astro framework'

// If you deploy to a subdirectory, set the `WEBSITE_BASE` here.
// e.g. '/blog' if you are deploying to example.com/blog
// Leave it as an empty string if you are deploying to a root domain (e.g. example.com)
export const SITE_BASE = ''

export const SocialLinks = [
	{
		name: 'GitHub',
		url: 'https://github.com/hidekazu-wada',
	},
	{
		name: 'X / Twitter',
		url: 'https://x.com/SekainoWanchi',
	},
	{
		name: 'Instagram',
		url: 'https://www.instagram.com/wadahidekazu/',
	},
]

export const WebsiteLinks = [
	{
		name: 'Home',
		url: '/',
	},
	{
		name: 'Blog',
		url: 'blog',
	},
	{
		name: 'About',
		url: 'about',
	},
]

// Google Analytics 4 測定ID (例: 'G-XXXXXXXXXX')
// 環境変数から取得するか、直接設定してください
export const GA_MEASUREMENT_ID = import.meta.env.PUBLIC_GA_MEASUREMENT_ID || ''

// Google Search Console 検証用メタタグのコンテンツ
// 環境変数から取得するか、直接設定してください
export const GOOGLE_SITE_VERIFICATION = import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION || ''
