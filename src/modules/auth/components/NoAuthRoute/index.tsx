import { Routes } from "config/routes";
import { Navigate } from "react-router-dom";

type NoAuthRouteProps = {
	Component: React.ComponentType;
};

const NoAuthRoute = ({ Component }: NoAuthRouteProps) => {
	const user = null;

	return user ? <Navigate to={Routes.News} replace /> : <Component />;
};

export default NoAuthRoute;
