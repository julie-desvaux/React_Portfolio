import { render, screen, fireEvent } from "@testing-library/react";

import About from "./About";

test("renders button for download cv", () => {
	render(<About />);
	const linkElement = screen.getByText(/julie desvaux/i);
	expect(linkElement).toBeInTheDocument();
	const button = screen.getByRole("button");
	fireEvent.click(button);
	expect(screen.getByText(/télécharger cv/i)).toBeInTheDocument();

	// expect(onClick).toHaveBeenCalledTimes(1);
});
