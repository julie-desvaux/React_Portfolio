// COMPONENTS
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/Portfolio/Portfolio";
import Experiences from "./Components/Experiences/Experiences";

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
		</>
	);
}

export default App;
