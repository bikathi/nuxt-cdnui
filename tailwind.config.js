/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
		"./node_modules/preline/preline.js",
	],
	theme: {
		extend: {
			scale: {
				101: "1.01",
			},
			colors: {
				dark: "#525252",
				darker: "#414141",
				darkest: "#313131",
				"dark-highlight": "#F9F6EE",
			},
		},
	},
	plugins: [require("preline/plugin"), require("@tailwindcss/forms")],
};
