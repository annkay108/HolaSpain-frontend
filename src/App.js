import React, { Component } from "react";
import { Switch, Route }    from "react-router-dom";

import "./App.css";

import Private from "./pages/Private";
import Profile from "./pages/Profile";
import Signup  from "./pages/Signup";
import Login   from "./pages/Login";
import Home    from "./pages/Home";
import User    from './pages/User';

import PrivateRoute from "./components/PrivateRoute";
import AnonRoute    from "./components/AnonRoute";
import Navbar       from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />

          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />

          <PrivateRoute exact path = "/private" component={Private} />
          <PrivateRoute exact path = "/profile/:id" component={Profile}/>
          <PrivateRoute exact path = "/user" component={User}/>
        </Switch>
      </div>
    );
  }
}

export default App;