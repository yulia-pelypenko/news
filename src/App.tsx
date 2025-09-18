import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import modules from "./modules";
import { AuthRoute, NoAuthRoute, PublicRoute } from "./modules/auth/components";
import { RouteType } from "./modules/auth/enums";

const mappedRoutes = {
	[RouteType.Auth]: AuthRoute,
	[RouteType.NoAuth]: NoAuthRoute,
	[RouteType.Public]: PublicRoute,
};

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{modules.routes?.map(({ path, Component, type }) => {
					const CurrentRoute = mappedRoutes[type];
					return (
						<Route
							key={path}
							path={path}
							element={<CurrentRoute Component={Component} />}
						/>
					);
				})}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
