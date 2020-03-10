import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import setstatusService from "./../lib/setstatus-service";
import userService from "./../lib/user-service";

class SetStatus extends Component {
  state = {
    id: this.props.match.params.id,
    title: "",
    description: "",
    currentUser: null
  };

  componentDidMount(){
    userService.getUserById(this.state.id)
    .then(data=> this.setState({currentUser: data}))
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { title, description } = this.state;

    setstatusService
      .setStatusById(this.state.id,{ title, description })
      .then(console.log("status has been set"))
      .catch(err => console.log(err));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {title, description} = this.state;  
    return (
      <div>
        <h1>Set Status</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />

          <label>Description:</label>
          <textarea
            name="description"
            value={description}
            onChange={this.handleChange}
          ></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default withAuth(SetStatus);
