import React, { Component } from 'react';
import { withAuth } from "./../lib/Auth";
import Private      from "./Private";
import AdminHome    from "./AdminHome";

class CheckIfAdmin extends Component {
    state={
        user: null
    }

    componentDidMount(){
        this.setState({user: this.props.user})
    }

    render() {
        return (
            <div>
                {
                    this.state.user?
                        this.state.user.isAdmin?<AdminHome />:<Private />
                    :null
                }
            </div>
        )
    }
}

export default withAuth(CheckIfAdmin);