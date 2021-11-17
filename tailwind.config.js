module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				lightBlue: "#a5c4d4",
				blue: "#005873",
				navyBlue: "#05445E",
			},
		},
		letterSpacing: {
			wide: ".18rem",
			widest: ".25rem",
		},
		animation: ["motion-reduce"],
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
