import { Routes } from "config/routes";
import { Navigate, useLocation } from "react-router-dom";

type AuthRouteProps = {
	Component: React.ComponentType;
};

const AuthRoute = ({ Component }: AuthRouteProps) => {
	const user = null;
	const location = useLocation();

	if (!user) {
		return (
			<Navigate to={Routes.Login} state={{ from: location.pathname }} replace />
		);
	}

	return <Component />;
};

export default AuthRoute;
