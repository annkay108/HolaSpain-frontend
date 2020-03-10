import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

class Navbar extends Component {
  render() {
    const { logout, isLoggedIn } = this.props;

    return (
      <nav className="navbar">
        <Link to={"/"} id="home-btn">
          <h4>Home</h4>
        </Link>

        {isLoggedIn ?
                  this.props.user.isAdmin?
                  (
                    <>
                      <Link to={"/Addthenotice"}>
                        <h4>Add the Notice</h4>
                      </Link>

                      <Link to={"/applicationList"}>
                        <h4> Applications </h4>
                      </Link>
                      <button onClick={logout}>Logout</button>
                    </>
                  ):
                (
                  <>
                    <Link to={"/user"}>
                      <h4>User</h4>
                    </Link>

                    <Link to={"/notice"}>
                      <h4> Notice </h4>
                    </Link>

                    <Link to={"/startApplication"}>
                      <h4> Start Application </h4>
                    </Link>

                    <Link to={"/applicationStatus"}>
                      <h4> Your Status </h4>
                    </Link>

                    <h4>Find Contacts</h4>
                    <button onClick={logout}>Logout</button>
                  </>
        ) : (
          <>
            <Link to="/login">
              {" "}
              <button className="navbar-button">Login</button>{" "}
            </Link>
            <br />
            <Link to="/signup">
              {" "}
              <button className="navbar-button">Sign Up</button>{" "}
            </Link>
          </>
        )}
      </nav>
    );
  }
}

export default withAuth(Navbar);
