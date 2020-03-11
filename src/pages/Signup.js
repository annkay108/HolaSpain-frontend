import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

class Signup extends Component {
  state = { email: "", password: "", userName: "", isAdmin: false };

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password, userName, isAdmin } = this.state;
    this.props.signup(email, password, userName, isAdmin);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password, userName } = this.state;
    return (
      <div class="mui-container">
        <h1>Sign Up</h1>

        <form onSubmit={this.handleFormSubmit}>
          <div className="mui-panel login" >
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <br/>
            <label>Name:</label>
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={this.handleChange}
            />
            <br/>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <br/>
          <div className="button-container">
            <input 
            class="mui-btn mui-btn--danger mui-btn--raised red"
            type="submit" 
            value="Signup" 
            />
          </div>
          </div>
        </form>

        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
    );
  }
}

export default withAuth(Signup);
