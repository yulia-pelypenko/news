import { BrowserRouter } from "react-router";
import "./App.css";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { RoutesRenderer } from "./router";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<RoutesRenderer />
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
