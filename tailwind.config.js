module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
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
