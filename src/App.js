// COMPONENTS
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";

// CSS
import "./App.scss";

function App() {
	return (
		<div className="container-app">
			<Navbar />
			<About />
			<Skills />
		</div>
	);
}

export default App;
