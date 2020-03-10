import React, { Component } from 'react';
import userService from "./../lib/user-service";
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
                                    <button onClick={()=>console.log("something")}>Set Status</button>
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