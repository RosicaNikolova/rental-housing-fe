import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";


//checks if there is a logged in user
const RequireAuth = () => {
    const {auth} = useAuth();
    const location = useLocation();

    return (
        auth?.accessToken
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location}} replace />
    );
}

export default RequireAuth;