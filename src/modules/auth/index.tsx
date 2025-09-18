import { lazy } from "react";
import type { IModule } from "../common/interfaces";
import { RouteType } from "./enums";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));

export const authModule: IModule = {
	routes: [
		{
			path: "/login",
			Component: LoginPage,
			type: RouteType.Public,
			lazy: true,
		},
		{
			path: "/register",
			Component: SignUpPage,
			type: RouteType.Public,
			lazy: true,
		},
	],
};
