import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { SignIn, SignUp, Home, About, Profile, Dashboard } from "../../pages";
import Header from "../Header/Header";
import { refreshCurrentUser } from "../../redux/operations";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

class App extends Component {
  componentDidMount() {
    this.props.refreshCurrentUser();
  }

  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </div>
    );
  }
}

const mapDispatch = { refreshCurrentUser };

export default connect(
  null,
  mapDispatch
)(App);
