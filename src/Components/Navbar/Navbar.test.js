import React from "react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";

// COMPONENT
import Navbar from "./Navabar";

it("should display links", () => {
	const { getByText } = render(<Navbar />);
	const linkMoi = getByText(/moi/i);
	expect(linkMoi).toBeInTheDocument();
	expect(screen.getByText(/moi/i).closest("a")).toHaveAttribute("href", "#me");

	const linkCompetences = getByText(/compétences/i);
	expect(linkCompetences).toBeInTheDocument();
	expect(screen.getByText(/compétences/i).closest("a")).toHaveAttribute("href", "#competences");

	const linkXP = getByText(/expériences/i);
	expect(linkXP).toBeInTheDocument();
	expect(screen.getByText(/expériences/i).closest("a")).toHaveAttribute("href", "#xp");

	const linkPortfolio = getByText(/portfolio/i);
	expect(linkPortfolio).toBeInTheDocument();
	expect(screen.getByText(/portfolio/i).closest("a")).toHaveAttribute("href", "#portfolio");

	const linkEducation = getByText(/education/i);
	expect(linkEducation).toBeInTheDocument();
	expect(screen.getByText(/education/i).closest("a")).toHaveAttribute("href", "#education");

	const linkMooc = getByText(/mooc/i);
	expect(linkMooc).toBeInTheDocument();
	expect(screen.getByText(/mooc/i).closest("a")).toHaveAttribute("href", "#mooc");

	const linkbenevolat = getByText(/bénévolat/i);
	expect(linkbenevolat).toBeInTheDocument();
	expect(screen.getByText(/bénévolat/i).closest("a")).toHaveAttribute("href", "#benevolat");
});
