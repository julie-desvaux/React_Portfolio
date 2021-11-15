import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

// COMPONENT
import Navbar from "./Navabar";

it("should display links", () => {
	const { getByText } = render(<Navbar />);
	const linkMoi = getByText(/moi/i);
	expect(linkMoi).toBeInTheDocument();
	expect(linkMoi.closest("a")).toHaveAttribute("href", "#me");

	const linkCompetences = getByText(/compétences/i);
	expect(linkCompetences).toBeInTheDocument();
	expect(linkCompetences.closest("a")).toHaveAttribute("href", "#competences");

	const linkXP = getByText(/expériences/i);
	expect(linkXP).toBeInTheDocument();
	expect(linkXP.closest("a")).toHaveAttribute("href", "#xp");

	const linkPortfolio = getByText(/portfolio/i);
	expect(linkPortfolio).toBeInTheDocument();
	expect(linkPortfolio.closest("a")).toHaveAttribute("href", "#portfolio");

	const linkEducation = getByText(/education/i);
	expect(linkEducation).toBeInTheDocument();
	expect(linkEducation.closest("a")).toHaveAttribute("href", "#education");

	const linkMooc = getByText(/mooc/i);
	expect(linkMooc).toBeInTheDocument();
	expect(linkMooc.closest("a")).toHaveAttribute("href", "#mooc");

	const linkbenevolat = getByText(/bénévolat/i);
	expect(linkbenevolat).toBeInTheDocument();
	expect(linkbenevolat.closest("a")).toHaveAttribute("href", "#benevolat");
});
