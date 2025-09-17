import type { ComponentType } from "react";
import type { RouteType } from "@/modules/auth/enums";

export interface IModule {
	routes: IRoute[];
}

export interface IRoute {
	Component: ComponentType;
	type: RouteType;
	path: string;
}
