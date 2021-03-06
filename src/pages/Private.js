import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";

class Private extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Welcome {this.props.user.userName}</h1>
      </div>
    );
  }
}

export default withAuth(Private);
