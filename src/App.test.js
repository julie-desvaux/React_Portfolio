import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders julie desvaux", () => {
	render(<App />);
	const linkElement = screen.getByText(/julie desvaux/i);
	expect(linkElement).toBeInTheDocument();
});
