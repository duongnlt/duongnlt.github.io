import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import typography from '@tailwindcss/typography'
import scrollbar from 'tailwind-scrollbar'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
				mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
			},
			colors: {
				light: {
					bg: '#fafafa', // Zinc-50
					text: '#18181b', // Zinc-900
					accent: '#2563eb', // Blue-600
					muted: '#71717a', // Zinc-500
					border: '#e4e4e7', // Zinc-200
				},
				dark: {
					bg: '#24292e', // GitHub Dark Background
					text: '#e1e4e8', // GitHub Dark Text - bright and readable
					accent: '#79b8ff', // GitHub Dark Blue (links/accents)
					muted: '#959da5', // GitHub Dark Gray
					border: '#79b8ff', // Using accent for border
				},
			},
			typography: (theme: any) => ({
				DEFAULT: {
					css: {
						maxWidth: '65ch',
						color: theme('colors.light.text'),
						fontFamily: theme('fontFamily.sans'),
						'h1, h2, h3, h4': {
							fontFamily: theme('fontFamily.serif'),
							fontWeight: '700',
						},
						a: {
							color: theme('colors.light.accent'),
							textDecoration: 'none',
							'&:hover': {
								textDecoration: 'underline',
							},
						},
					},
				},
				dark: {
					css: {
						color: theme('colors.dark.text'),
						'h1, h2, h3, h4, h5, h6': {
							fontWeight: '700',
							color: theme('colors.dark.text'),
						},
						p: {
							color: theme('colors.dark.text'),
						},
						strong: {
							color: theme('colors.dark.text'),
						},
						a: {
							color: theme('colors.dark.accent'),
							textDecoration: 'underline',
							'&:hover': {
								color: theme('colors.dark.text'),
								textDecoration: 'none',
							},
						},
						code: {
							color: theme('colors.dark.accent'),
							backgroundColor: '#1a1a1a',
							borderRadius: '0.25rem',
							padding: '0.125rem 0.25rem',
						},
						'code::before': {
							content: '""',
						},
						'code::after': {
							content: '""',
						},
						pre: {
							backgroundColor: '#1a1a1a',
							color: theme('colors.dark.text'),
							border: `1px solid ${theme('colors.dark.border')}`,
						},
						'pre code': {
							backgroundColor: 'transparent',
							color: theme('colors.dark.text'),
							padding: '0',
						},
					},
				},
			}),
		},
	},
	plugins: [typography, scrollbar],
}
