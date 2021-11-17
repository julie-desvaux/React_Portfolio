// COMPONENTS
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/Portfolio/Portfolio";

// CSS
import "./App.scss";

function App() {
	return (
		<>
			<Navbar />
			<About />
			<Skills />
			<Portfolio />
		</>
	);
}

export default App;
