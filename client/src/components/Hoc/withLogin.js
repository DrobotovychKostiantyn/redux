import React, { Component } from "react";
import { connect } from "react-redux";
import { getAuthenticated } from "../../redux/selectors";

const withLogin = WrapperComponent => {
  class withLogin extends Component {
    componentDidUpdate() {
      if (this.props.isAuthenticated) {
        const { from } = this.props.location.state || { from: "/" };

        this.props.history.replace(from);
      }
    }

    render() {
      return <WrapperComponent />;
    }
  }

  const mapState = state => ({
    isAuthenticated: getAuthenticated(state)
  });

  return connect(mapState)(withLogin);
};

export default withLogin;
