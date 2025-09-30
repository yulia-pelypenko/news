import type { ComponentType } from "react";
import type { RouteType } from "@/modules/auth/constants/routeType";

export interface IModule {
	routes: IRoute[];
}

type RouteType = (typeof RouteType)[keyof typeof RouteType];

export interface IRoute {
	Component: ComponentType;
	type: RouteType;
	path: string;
	lazy: boolean;
}
