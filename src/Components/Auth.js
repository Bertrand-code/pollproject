import { Navigate, Outlet, useLocation } from "react-router-dom";
import { connect } from "react-redux";

const Auth = ({ auth }) => {
  let location = useLocation();
  if (!auth) return <Navigate to="/login" state={{ from: location }} replace />;
  return <Outlet />;
};
const mapStateToProps = (state) => ({
  auth: state.authStore.auth,
});

export default connect(mapStateToProps)(Auth);
