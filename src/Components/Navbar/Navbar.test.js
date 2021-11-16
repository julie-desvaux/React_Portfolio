import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// COMPONENT
import Navbar from "./Navbar";

it("should display links", () => {
	const { getByText } = render(
		<Router>
			<Navbar />
		</Router>
	);
	const linkMoi = getByText(/moi/i);
	expect(linkMoi).toBeInTheDocument();
	expect(linkMoi).toHaveAttribute("href", "/#about");

	const linkCompetences = getByText(/compétences/i);
	expect(linkCompetences).toBeInTheDocument();
	expect(linkCompetences).toHaveAttribute("href", "/#competences");

	const linkXP = getByText(/expériences/i);
	expect(linkXP).toBeInTheDocument();
	expect(linkXP).toHaveAttribute("href", "/#xp");

	const linkPortfolio = getByText(/portfolio/i);
	expect(linkPortfolio).toBeInTheDocument();
	expect(linkPortfolio).toHaveAttribute("href", "/#portfolio");

	const linkEducation = getByText(/education/i);
	expect(linkEducation).toBeInTheDocument();
	expect(linkEducation).toHaveAttribute("href", "/#education");

	const linkMooc = getByText(/mooc/i);
	expect(linkMooc).toBeInTheDocument();
	expect(linkMooc).toHaveAttribute("href", "/#mooc");

	const linkbenevolat = getByText(/bénévolat/i);
	expect(linkbenevolat).toBeInTheDocument();
	expect(linkbenevolat).toHaveAttribute("href", "/#benevolat");
});
