import { Routes } from "@/config/routes";
import { RouteType } from "../auth/constants/routeType";
import type { IModule } from "../common/interfaces";
import AuctionLogsPage from "./pages/AuctionLogsPage";

const prebidModule: IModule = {
	routes: [
		{
			path: Routes.AuctionLogs,
			Component: AuctionLogsPage,
			type: RouteType.Public,
			lazy: false,
		},
	],
};

export default prebidModule;
