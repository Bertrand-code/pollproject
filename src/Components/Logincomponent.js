import React, { useState } from "react";
import { connect } from "react-redux";
import { users } from "../db/_DATA";
import { Navigate, useLocation } from "react-router-dom";
import { userLogin } from "../Store/authReducer";

function LoginComponent({ login, auth }) {
  const [current, setCurrent] = useState(users.sarahedo);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username: current.id, password: current.password });
  };

  let location = useLocation();
  let from = location.state?.from?.pathname || "/questions";

  const onchange = (e) => {
    setCurrent(users[e.target.value]);
  };

  if (auth) return <Navigate to={from} replace />;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        className="loginForm"
        onSubmit={handleSubmit}
        data-testid="loginForm"
      >
        <label>
          Username:
          <select name="username" onChange={onchange}>
            {Object.values(users).map((user) => (
              <option value={user.id} key={user.id}>
                {user.id}
              </option>
            ))}
          </select>
          <br />
        </label>
        <br />
        <label>
          Password:
          <input
            className="inputElement"
            type="password"
            value={current.password}
            onChange={(e) => {}}
          />
        </label>
        <br />
        <button className="btn"> Login </button>
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  login: userLogin,
};
const mapStateToProps = (state) => ({
  auth: state.authStore.auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
