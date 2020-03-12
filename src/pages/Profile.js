import React, { Component } from 'react';
import {withAuth} from "./../lib/Auth";
import userService from "../lib/user-service";

class Profile extends Component {
    state={
        id: this.props.match.params.id,
        userList: null
    }

    componentDidMount(){
        userService
        .getUserById(this.state.id)
        .then(data =>{
            this.setState({userList: data})
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="notice-container">
                {
                    this.state.userList?
                        <div className="user-notice">
                            <img src={`${this.state.userList.imageUrl}`} alt="user"/>
                            <h1>Full Name: {this.state.userList.userName}</h1>
                            <h2>Contact: {this.state.userList.number}</h2>
                            <h2>City: {this.state.userList.city}</h2>
                            <h2>Email: {this.state.userList.email}</h2>
                        </div>
                    :null
                }
            </div>
        )
    }
}

export default withAuth(Profile);