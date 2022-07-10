import { useSelector } from "react-redux";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export function RequireAuth() {
  const auth = useSelector((state) => state.authStore.auth);
  let location = useLocation();

  if (!auth) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }
  return <Outlet />;
}
