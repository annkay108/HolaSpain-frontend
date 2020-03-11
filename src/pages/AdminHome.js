import React, { Component } from 'react';
import {withAuth} from "./../lib/Auth";

class AdminHome extends Component {
    render() {
        return (
            <div className="Home">
                <h1>Welcome Admin</h1>
            </div>
        )
    }
}
export default withAuth(AdminHome);