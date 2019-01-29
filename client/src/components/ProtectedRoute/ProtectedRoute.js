import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getAuthenticated } from "../../redux/selectors";
const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location }
            }}
          />
        );
      }}
    />
  );
};

const mapState = state => ({
  isAuthenticated: getAuthenticated(state)
});

export default connect(mapState)(ProtectedRoute);
