import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../Context/AuthContext"

export const ProtectedRoute = ({ children, ...rest }) => {

    const { user } = useAuth()

    if (!user) {
        return <Navigate to={`/`} replace />;
    }

    return <Outlet />;

}

export default ProtectedRoute
