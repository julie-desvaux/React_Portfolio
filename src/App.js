import React, { Suspense } from "react";

// CSS
import "./App.scss";

// COMPONENTS
const Navbar = React.lazy(() => import("./Components/Navbar/Navbar"));
const About = React.lazy(() => import("./Components/About/About"));
const Skills = React.lazy(() => import("./Components/Skills/Skills"));
const Portfolio = React.lazy(() => import("./Components/Portfolio/Portfolio"));
const Experiences = React.lazy(() => import("./Components/Experiences/Experiences"));
const Education = React.lazy(() => import("./Components/Education/Education"));
const Mooc = React.lazy(() => import("./Components/Mooc/Mooc"));
const Benevolat = React.lazy(() => import("./Components/Benevolat/Benevolat"));
const Contact = React.lazy(() => import("./Components/Contact/Contact"));

function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Navbar />
			<About />
			<Skills />
			<Portfolio />
			<Experiences />
			<Education />
			<Mooc />
			<Benevolat />
			<Contact />
		</Suspense>
	);
}

export default App;
