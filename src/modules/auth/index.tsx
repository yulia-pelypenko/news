import type { IModule } from "../common/interfaces";
import { RouteType } from "./enums";
import { LoginPage, SignUpPage } from "./pages";

export const authModule: IModule = {
	routes: [
		{
			path: "/login",
			Component: LoginPage,
			type: RouteType.Public,
		},
		{
			path: "/register",
			Component: SignUpPage,
			type: RouteType.Public,
		},
	],
};
