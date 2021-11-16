import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

test("renders julie desvaux", () => {
	render(
		<Router>
			<App />
		</Router>
	);
	const linkElement = screen.getByText(/julie desvaux/i);
	expect(linkElement).toBeInTheDocument();
	const navbar = screen.getByRole("navigation");
	expect(navbar).toBeInTheDocument();
});
