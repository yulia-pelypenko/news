import { Navigate, useLocation } from "react-router-dom";
import { Routes } from "@/config/routes";
import { useAuthStore } from "../../store/useAuthStore";

type AuthRouteProps = {
	Component: React.ComponentType;
};

const AuthRoute = ({ Component }: AuthRouteProps) => {
	const user = useAuthStore((state) => state.user);
	const location = useLocation();

	if (!user) {
		return (
			<Navigate to={Routes.Login} state={{ from: location.pathname }} replace />
		);
	}

	return <Component />;
};

export default AuthRoute;
