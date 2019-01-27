import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { SignIn, SignUp } from "../../pages";
import Header from "../Header/Header";
import { refreshCurrentUser } from "../../redux/operations";

class App extends Component {
  componentDidMount() {
    this.props.refreshCurrentUser();
  }

  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
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
