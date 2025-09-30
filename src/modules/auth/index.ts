import { lazy } from "react";
import { Routes } from "@/config/routes";
import type { IModule } from "../common/interfaces";
import { RouteType } from "./constants/routeType";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));

const authModule: IModule = {
	routes: [
		{
			path: Routes.Login,
			Component: LoginPage,
			type: RouteType.NoAuth,
			lazy: true,
		},
		{
			path: Routes.Register,
			Component: SignUpPage,
			type: RouteType.NoAuth,
			lazy: true,
		},
	],
};

export default authModule;
