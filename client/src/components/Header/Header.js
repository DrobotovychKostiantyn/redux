import React from "react";
// import { connect } from 'react-redux';
import UserProfile from "../UserProfile/UserProfile";
import AuthNav from "../AuthNav/AuthNav";
import classes from "./Header.module.css";

// import * as selectors from '../../redux/selectors';
// import * as operations from '../../redux/operations';

const Header = ({ isAuthenticated, user, onSignOut }) => (
  <header className={classes.header}>
    {isAuthenticated ? (
      <UserProfile onSignOut={onSignOut} user={user} />
    ) : (
      <AuthNav />
    )}
  </header>
);

export default Header;
