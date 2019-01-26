import React, { Component } from "react";
// import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { SignIn, SignUp } from "../../pages";
import Header from "../Header/Header";

class App extends Component {
  componentDidMount() {}

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

export default App;
