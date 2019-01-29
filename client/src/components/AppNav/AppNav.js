import React from "react";
import { NavLink } from "react-router-dom";

const AppNav = ({ isAuthenticated }) => (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    {isAuthenticated && (
      <>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </>
    )}
  </nav>
);

export default AppNav;
