type PublicRouteProps = {
	Component: React.ComponentType;
};

const PublicRoute = ({ Component }: PublicRouteProps) => {
	return <Component />;
};

export default PublicRoute;
