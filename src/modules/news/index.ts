import { lazy } from "react";
import { Routes } from "@/config/routes";
import { RouteType } from "../auth/constants/routeType";
import type { IModule } from "../common/interfaces";
import { NewsListPage } from "./pages";

const NewsPage = lazy(() => import("./pages/NewsPage"));

const newsModule: IModule = {
	routes: [
		{
			path: Routes.News,
			Component: NewsListPage,
			type: RouteType.Public,
			lazy: false,
		},
		{
			path: `${Routes.News}/:link`,
			Component: NewsPage,
			type: RouteType.Public,
			lazy: true,
		},
	],
};

export default newsModule;
