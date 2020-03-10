import React, { Component } from 'react';
import userService from "./../lib/user-service";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

class ApplicationList extends Component {
    state ={
        userList: null
    }

    componentDidMount(){
        userService
            .getAllUser()
            .then(data => {
                this.setState({userList: data})
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                {
                    this.state.userList?
                    this.state.userList.map(el =>{
                        if(el.hasApplied){
                            return(
                                <div key={el._id}>
                                    <h3>{el.userName}</h3>
                                    <Link to={`/setStatus/${el._id}`}>Set Status</Link>
                                </div>
                            )
                        }
                    })
                    :<div>There are no applications</div>
                }
            </div>
        )
    }
}

export default withAuth(ApplicationList);