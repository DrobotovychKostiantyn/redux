import React, { Component } from "react";
import SignInForm from "../components/SignInForm/SignInForm";
// import { connect } from "react-redux";
// import { getAuthenticated } from "../redux/selectors";
import withLogin from "../components/Hoc/withLogin";

class SignIn extends Component {
  // componentDidUpdate() {
  //   if (this.props.isAuthenticated) {
  //     const { from } = this.props.location.state || { from: "/" };

  //     this.props.history.replace(from);
  //   }
  // }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", fontWeight: 500 }}>
          Please enter your credentials
        </h1>
        <SignInForm />
      </div>
    );
  }
}

// const mapState = state => ({
//   isAuthenticated: getAuthenticated(state)
// });

export default withLogin(SignIn);
