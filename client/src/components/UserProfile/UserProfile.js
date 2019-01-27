import React from "react";
import Button from "../common/Button/Button";
import classes from "./UserProfile.module.css";
import { connect } from "react-redux";
import { getUser } from "../../redux/selectors";

const UserProfile = ({ user: { name }, onSignOut = () => null }) => (
  <div className={classes.container}>
    <img
      className={classes.image}
      src="https://www.redditstatic.com/new-icon.png"
      widt="40"
      height="40"
      alt=""
    />
    <span className={classes.name}>{name}</span>

    <Button label="Sign out" onClick={onSignOut} />
  </div>
);

const mapState = state => ({
  user: getUser(state)
});

export default connect(mapState)(UserProfile);
