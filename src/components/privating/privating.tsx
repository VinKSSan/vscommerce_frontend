import { Navigate } from "react-router-dom";
import { hasAnyRoles, isAuthenticated } from "../../services/authService";
import type { JSX } from "react";
import type { RoleEnum } from "../../models/auth";

type Props = {
    children: JSX.Element;
    roles?: RoleEnum[];
}
export function Privating({ children, roles = [] }: Props) {
    if (!isAuthenticated()) {
        return <Navigate to="/login" />;
    }
    if (!hasAnyRoles(roles)) {
        return <Navigate to="/catalog" />;
    }
    return children;
}