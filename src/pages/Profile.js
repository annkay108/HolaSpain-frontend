import React, { Component } from 'react';
import {withAuth} from "./../lib/Auth";
import userService from "../lib/user-service";

class Profile extends Component {
    state={
        id: this.props.match.params.id,
        userList: null
    }

    componentWillMount(){
        userService
        .getUserById(this.state.id)
        .then(data =>{
            this.setState({userList: data})
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                {
                    this.state.userList?
                        <div>
                            <h1>{this.state.userList.userName}</h1>
                        </div>
                    :null
                }
            </div>
        )
    }
}

export default withAuth(Profile);