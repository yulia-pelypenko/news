import { BrowserRouter } from "react-router";
import "./App.css";
import { RoutesRenderer } from "./router";

function App() {
	return (
		<BrowserRouter>
			<RoutesRenderer />
		</BrowserRouter>
	);
}

export default App;
