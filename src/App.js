// COMPONENTS
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/Portfolio/Portfolio";
import Experiences from "./Components/Experiences/Experiences";
import Education from "./Components/Education/Education";

// CSS
import "./App.scss";

function App() {
	return (
		<>
			<Navbar />
			<About />
			<Skills />
			<Portfolio />
			<Experiences />
			<Education />
		</>
	);
}

export default App;
