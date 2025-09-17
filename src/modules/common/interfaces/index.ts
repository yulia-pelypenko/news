import type { RouteType } from "@/modules/auth/enums";
import type { ComponentType } from "react";

export interface IModule {
  routes: IRoute[];
}

export interface IRoute {
  Component: ComponentType;
  type: RouteType;
  path: string;
}