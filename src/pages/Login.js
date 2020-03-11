import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import { Link } from "react-router-dom";

class Login extends Component {
  state = { email: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    this.props.login(email, password);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="mui-container">
        <h1>Login</h1>

        <form onSubmit={this.handleFormSubmit}>
          <div className="mui-panel login">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <br />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <br />
            <div className="button-container">
              <input
                className="mui-btn mui-btn--danger mui-btn--raised red"
                type="submit"
                value="Login"
              />
            </div>
          </div>
        </form>
        <p>Don't have an account?</p>
        <Link to={"/signup"}> Signup</Link>
      </div>
    );
  }
}

export default withAuth(Login);
