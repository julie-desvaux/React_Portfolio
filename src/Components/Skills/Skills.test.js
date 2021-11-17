import { render, screen, fireEvent } from "@testing-library/react";

import Skills from "./Skills";

test("renders images for skills", () => {
	const imgs = [
		"Logo HTML5",
		"Logo CSS3",
		"Logo Javascript",
		"Logo Bootstrap",
		"Logo Sass",
		"Logo Tailwind",
		"Logo React",
		"Logo Redux",
		"Logo NextJS",
		"Logo Node",
		"Logo ExpressJS",
		"Logo Java",
		"Logo MongoDB",
		"Logo Postgresql",
		"Logo My SQL",
		"Logo Git",
		"Logo Gitlab",
		"Logo Github",
	];
	render(<Skills />);
	const images = screen.getAllByRole("img");
	expect(images.length).toBe(imgs.length);
	images.forEach((image, index) => {
		expect(image).toHaveAttribute("alt", imgs[index]);
	});
});
