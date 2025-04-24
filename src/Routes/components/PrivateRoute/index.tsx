import { Navigate } from "react-router-dom";

import { ReactNode } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { Loading } from "../Loading";

interface PrivateRouteProps {
    children: ReactNode;
}
export function PrivateRoute({ children }: PrivateRouteProps) {
    const { user, loading } = useAuth();

    if (loading) {
        return <Loading/>; // ou um spinner
    }
    return user ? children : <Navigate to="/" />;
}
