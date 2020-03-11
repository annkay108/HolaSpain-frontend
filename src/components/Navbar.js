import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

class Navbar extends Component {
  render() {
    const { logout, isLoggedIn } = this.props;

    return (
      <nav className="navbar">
      <div>
        <Link to={"/"} className="home-btn">
          <h4>Home</h4>
        </Link>
      </div>

        {isLoggedIn ?
                  this.props.user.isAdmin?
                  (
                    <>
                      <Link to={"/Addthenotice"} className="home-btn">
                        <h4>Add the Notice</h4>
                      </Link>

                      <Link to={"/applicationList"} className="home-btn">
                        <h4> Applications </h4>
                      </Link>
                      <button className="logout" onClick={logout}>Logout</button>
                    </>
                  ):
                (
                  <>
                    <Link to={"/user"} className="home-btn">
                      <h4>User</h4>
                    </Link>

                    <Link to={"/notice"} className="home-btn">
                      <h4> Notice </h4>
                    </Link>

                    <Link to={"/startApplication"} className="home-btn">
                      <h4> Start Application </h4>
                    </Link>

                    <Link to={"/applicationStatus"} className="home-btn">
                      <h4> Your Status </h4>
                    </Link>

                    <Link to={"/myProfile"} className="home-btn">
                      <h4> My Profile</h4>
                    </Link>
                    <button className="logout" onClick={logout}>Logout</button>
                  </>
        ) : (
          <div className="auth-div">
            <Link to="/login" className="home-btn">
              {" "}
              <button className="navbar-button">Login</button>{" "}
            </Link>
            <br />
            <Link to="/signup" className="home-btn">
              {" "}
              <button className="navbar-button">Sign Up</button>{" "}
            </Link>
          </div>
        )}
      </nav>
    );
  }
}

export default withAuth(Navbar);
