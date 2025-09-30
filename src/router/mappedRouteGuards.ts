import { AuthRoute, NoAuthRoute, PublicRoute } from "@/modules/auth/components";
import { RouteType } from "@/modules/auth/constants/routeType";

export const mappedRouteGuards = {
	[RouteType.Auth]: AuthRoute,
	[RouteType.NoAuth]: NoAuthRoute,
	[RouteType.Public]: PublicRoute,
};
