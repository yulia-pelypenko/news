import type { ComponentType } from "react";
import type { RouteType as RouteTypeConst } from "@/modules/auth/constants/routeType";

export interface IModule {
	routes: IRoute[];
}

type RouteType = (typeof RouteTypeConst)[keyof typeof RouteTypeConst];

export interface IRoute {
	Component: ComponentType;
	type: RouteType;
	path: string;
	lazy: boolean;
}
