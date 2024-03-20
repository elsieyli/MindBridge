import { Outlet, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoutes = () => {
	const { isAuthenticated, isLoading } = useAuth0();
	if (isLoading) {
		return <div>Loading...</div>;
	}
	return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
