import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "./Header";

export default function Navbar() {
  return (
    <>
      <header>
        <h1>Employee Poll</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="questions">Home</NavLink>
            </li>
            <li>
              <NavLink to="add">New poll</NavLink>
            </li>
            <li>
              <NavLink to="leaderboard">Leaderboard</NavLink>
            </li>
          </ul>
        </nav>
        <Header />
      </header>
      <Outlet />
    </>
  );
}
