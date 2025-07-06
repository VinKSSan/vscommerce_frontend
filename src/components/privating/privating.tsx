import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../../services/authService";
import type { JSX } from "react";

type Props = {
children: JSX.Element;
}
export function Privating({ children }: Props) {
    if (!isAuthenticated()) {
        return <Navigate to="/login" />;
    }
    return children;
}