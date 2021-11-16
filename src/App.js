// COMPONENTS
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";

// CSS
import "./App.scss";

function App() {
	return (
		<div className="container-app">
			<Navbar />
			<About />
		</div>
	);
}

export default App;
