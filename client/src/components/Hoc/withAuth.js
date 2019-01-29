import React, { Component } from "react";
import { connect } from "react-redux";
import { getAuthenticated } from "../../redux/selectors";

const withAuth = WrapperComponent => {
  class withAuth extends Component {
    componentDidMount() {
      if (!this.props.isAuthenticated) {
        this.props.history.push({
          pathname: "/signin"
        });
      }
    }

    componentDidUpdate(prevProps) {
      if (this.props.isAuthenticated !== prevProps.isAuthenticated) {
        this.props.history.push({
          pathname: "/"
        });
      }
    }

    render() {
      return <WrapperComponent {...this.props} />;
    }
  }

  const mapState = state => ({
    isAuthenticated: getAuthenticated(state)
  });

  return connect(mapState)(withAuth);
};

export default withAuth;
