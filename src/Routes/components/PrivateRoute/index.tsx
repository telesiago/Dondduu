import { Navigate } from "react-router-dom";

import { ReactNode } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { Loading } from "../Loading";

interface PrivateRouteProps {
    children: ReactNode;
}
const loading = true;
export function PrivateRoute({ children }: PrivateRouteProps) {
    const { user } = useAuth();

    if (loading) {
        return <Loading/>; // ou um spinner
    }
    console.log(user)
    return user ? children : <Navigate to="/" />;
}
