import { AuthRoute, NoAuthRoute, PublicRoute } from "@/modules/auth/components";
import { RouteType } from "@/modules/auth/enums";

export const mappedRouteGuards = {
	[RouteType.Auth]: AuthRoute,
	[RouteType.NoAuth]: NoAuthRoute,
	[RouteType.Public]: PublicRoute,
};
