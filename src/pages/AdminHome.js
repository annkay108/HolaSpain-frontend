import React, { Component } from 'react';
import {withAuth} from "./../lib/Auth";

class AdminHome extends Component {
    render() {
        return (
            <div>
                Hello admin
            </div>
        )
    }
}
export default withAuth(AdminHome);