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
            <div className="notice-container">
                <h1>Application Status</h1>
                {
                    this.state.currentUser?
                    this.state.currentUser.hasApplied?
                    <div>
                        {this.state.currentUser.appStatus.length===0?
                        <h1>Your Application is in process</h1>
                        :
                            this.state.currentUser.appStatus.map(el=>{
                            return(
                                <div key={el._id} className="user-notice">
                                   <h1>{el.title}</h1> 
                                   <p>{el.description}</p>
                                </div>
                            )
                        }
                        )}
                    </div>
                    :<div>
                        <h1>You have not applied for the application</h1>
                    </div>
                    :null
                }
            </div>
        )
    }
}

export default withAuth(ApplicationStatus);