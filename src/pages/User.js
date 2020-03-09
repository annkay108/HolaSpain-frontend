import React, { Component } from 'react';
import {withAuth} from "./../lib/Auth";
import { Link } from "react-router-dom";
import userService from "../lib/user-service";

class User extends Component {
    state={
        userList: null,
        userById: null
    }

    componentDidMount(){
        userService
            .getAllUser()
            .then(data => {
                this.setState({userList: data})
            })
            .catch(err => console.log(err));
    }

    AddUser(id){
        userService.addUser(id)
        .then(data=>{
            userService.getAllUser()
            .then(datas =>{
                this.setState({userList: datas});
            })
        })
        .catch(err => console.log(err));
    }

    Accept(id){
        userService.AcceptContact(id)
        .then(data =>{
            userService.getAllUser()
            .then(datas=>{
                this.setState({userList: datas})
            })
        })
    }

    componentDidUpdate(prevState, prevProps) {

    }

    render() {
        let index = -1;
        if(this.state.userList){
            index = this.state.userList.findIndex(x => x._id ===this.props.user._id);
        }
        return (
            <div>
                {this.state.userList ? 
                    this.state.userList.map(el => {
                    if(!el.isAdmin && el._id !== this.props.user._id)
                    {
                        return(
                            <div key={el._id}>
                                <h3>{el.userName}</h3>
                                <button onClick={()=>{this.AddUser(el._id)}}>Add Contact</button>
                            </div>
                        )
                    }
                    })
                : null}
                <div>    
                    <h1>These are id of your request</h1>
                    {
                        this.state.userList ?
                            this.state.userList[index].requests.map(el =>{
                                return(
                                    <div key={el._id}>
                                        <h3>{el.userName}</h3>
                                        <button onClick={()=>{this.Accept(el)}}>Accept</button>
                                    </div>
                                )
                            })
                        :null
                    }
                </div>
                <div>
                    <h1>These are id of your pending</h1>
                    {
                        this.state.userList ?
                            this.state.userList[index].pending.map(el =>{
                                return(
                                    <div key={el._id}>
                                        <h3>{el.userName}</h3>
                                    </div>
                                )
                            })
                        :null
                    }
                </div>
                <div>
                    <h1>These are id of your friends</h1>
                    {
                        this.state.userList ?
                            this.state.userList[index].friends.map(el =>{
                                return(
                                    <div key={el._id}>
                                        <Link to={`/profile/${el._id}`}>
                                            <h3>{el.userName}</h3>
                                        </Link>
                                    </div>
                                )
                            })
                        :null
                    }
                </div>
            </div>
        )
    }
}

export default withAuth(User);