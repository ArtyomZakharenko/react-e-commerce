import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { ReactNode } from "react";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
	const { user } = useAuth0();
	if (!user) {
		return <Navigate to='/'/>;
	}
	return <>{ children }</>;
};
export default PrivateRoute;
