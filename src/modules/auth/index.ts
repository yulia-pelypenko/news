import { lazy } from "react";
import type { IModule } from "../common/interfaces";
import { RouteType } from "./enums";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));

const authModule: IModule = {
	routes: [
		{
			path: "/login",
			Component: LoginPage,
			type: RouteType.NoAuth,
			lazy: true,
		},
		{
			path: "/register",
			Component: SignUpPage,
			type: RouteType.NoAuth,
			lazy: true,
		},
	],
};

export default authModule;
