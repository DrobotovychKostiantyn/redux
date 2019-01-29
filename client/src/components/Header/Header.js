import React from "react";
import { connect } from "react-redux";
import UserProfile from "../UserProfile/UserProfile";
import AuthNav from "../AuthNav/AuthNav";
import AppNav from "../AppNav/AppNav";
import classes from "./Header.module.css";

import { getAuthenticated } from "../../redux/selectors";
import { signOut } from "../../redux/operations";

const Header = ({ isAuthenticated, user, onSignOut }) => (
  <header className={classes.header}>
    <AppNav isAuthenticated={isAuthenticated} />
    {isAuthenticated ? (
      <UserProfile onSignOut={onSignOut} user={user} />
    ) : (
      <AuthNav />
    )}
  </header>
);

const mapState = state => ({
  isAuthenticated: getAuthenticated(state)
});

const mapDispatch = { onSignOut: signOut };

export default connect(
  mapState,
  mapDispatch
)(Header);
