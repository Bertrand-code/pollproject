import React from "react";
import { connect } from "react-redux";
import { logoutAction } from "../Store/authReducer";

function Header({ logout, username }) {
  return (
    <div
      style={{
        width: "200px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        fontSize: "18px",
        padding: "5px",
        gap: "10px",
      }}
    >
      {username}
      <button
        style={{
          height: "100%",
          border: "none",
          backgroundColor: "#57d1f0",
          fontSize: "18px",
          padding: "10px",
        }}
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}
const mapStateToProps = (state) => ({
  username: state.authStore.user.id,
});

const mapDispatchToProps = {
  logout: logoutAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
