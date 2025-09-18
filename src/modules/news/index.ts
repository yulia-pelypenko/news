import { Routes } from "@/config/routes";
import { RouteType } from "../auth/enums";
import type { IModule } from "../common/interfaces";
import { NewsListPage, NewsPage } from "./pages";

export const newsModule: IModule = {
	routes: [
		{
			path: Routes.News,
			Component: NewsListPage,
			type: RouteType.Public,
		},
		{
			path: "/news/:id",
			Component: NewsPage,
			type: RouteType.Public,
		},
	],
};
