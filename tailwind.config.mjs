/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			"white": "#F6F6F6",
			"purple": {
				400: "#968DFF",
				700: "#8277FF"
			},
			"dark-gray": {
				400: "#262626",
				700: "#1A1A1A"
			}
		},
		fontFamily: {
			sans: ['Onest', "sans-serif"]
		},
		extend: {},
	},
	plugins: [],
}
