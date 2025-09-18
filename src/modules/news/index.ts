import { lazy } from "react";
import { Routes } from "@/config/routes";
import { RouteType } from "../auth/enums";
import type { IModule } from "../common/interfaces";
import { NewsListPage } from "./pages";

const NewsPage = lazy(() => import("./pages/NewsPage"));

export const newsModule: IModule = {
	routes: [
		{
			path: Routes.News,
			Component: NewsListPage,
			type: RouteType.Public,
			lazy: false,
		},
		{
			path: "/news/:id",
			Component: NewsPage,
			type: RouteType.Public,
			lazy: true,
		},
	],
};
