import { Routes } from "config/routes";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

type NoAuthRouteProps = {
	Component: React.ComponentType;
};

const NoAuthRoute = ({ Component }: NoAuthRouteProps) => {
	const user = useAuthStore((state) => state.user);

	return user ? <Navigate to={Routes.News} replace /> : <Component />;
};

export default NoAuthRoute;
