import React, { Component } from "react";
import { Switch, Route }    from "react-router-dom";

import "./App.css";

import ApplicationStatus from "./pages/ApplicationStatus";
import StartApplication  from "./pages/StartApplication";
import ApplicationList   from "./pages/ApplicationList";
import AddTheNotice      from "./pages/AddTheNotice";
import CheckIfAdmin      from "./pages/CheckIfAdmin";
import UserNotice        from "./pages/UserNotice";
import SetStatus         from "./pages/SetStatus";
import Profile           from "./pages/Profile";
import Signup            from "./pages/Signup";
import Login             from "./pages/Login";
import Home            from "./pages/Home";
import User              from './pages/User';

import PrivateRoute from "./components/PrivateRoute";
import AnonRoute    from "./components/AnonRoute";
import Navbar       from "./components/Navbar";
import MyProfile from "./pages/MyProfile";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />

          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />

          <PrivateRoute exact path = "/private" component={CheckIfAdmin} />
          <PrivateRoute exact path = "/profile/:id" component={Profile}/>
          <PrivateRoute exact path = "/user" component={User}/>
          <PrivateRoute exact path = "/Addthenotice" component={AddTheNotice}/>
          <PrivateRoute exact path = "/notice" component={UserNotice}/>
          <PrivateRoute exact path = "/startApplication" component={StartApplication}/>
          <PrivateRoute exact path = "/applicationStatus" component ={ApplicationStatus}/>
          <PrivateRoute exact path = "/applicationList" component ={ApplicationList}/>
          <PrivateRoute exact path = "/myProfile" component ={MyProfile}/>
          <PrivateRoute exact path = "/setStatus/:id" component ={SetStatus}/>
        </Switch>
      </div>
    );
  }
}

export default App;