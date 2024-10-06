/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			"white": {
				DEFAULT: "#F6F6F6",
				700: "#e1e1e1"
			},
			"purple": {
				400: "#968DFF",
				700: "#8277FF"
			},
			"dark-gray": {
				400: "#262626",
				700: "#1A1A1A",
				800: "#0f0f0f"
			}
		},
		fontFamily: {
			sans: ['Onest', "sans-serif"]
		},
		extend: {},
	},
	plugins: [],
}
