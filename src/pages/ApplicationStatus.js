import React, { Component } from 'react';
import { withAuth } from "./../lib/Auth";
import userService from "./../lib/user-service";

class ApplicationStatus extends Component {
    state={
        id: this.props.user._id,
        currentUser: null
    }

    componentDidMount(){
        userService.getUserById(this.state.id)
        .then(data => this.setState({currentUser: data}))
    }

    render() {
        return (
            <div>
                {
                    this.state.currentUser?
                    this.state.currentUser.hasApplied?
                    <div>
                        {this.state.currentUser.appStatus.map(el=>{
                            return(
                                <div key={el._id}>
                                   <h1>{el.title}</h1> 
                                   <p>{el.description}</p>
                                </div>
                            )
                        }
                        )}
                    </div>
                    :<div>
                        You have not applied for the application
                    </div>
                    :null
                }
            </div>
        )
    }
}

export default withAuth(ApplicationStatus);