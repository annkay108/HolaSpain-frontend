import React, { Component } from 'react';
import { withAuth } from "./../lib/Auth";

class ApplicationStatus extends Component {
    render() {
        return (
            <div>
                Check your application status
            </div>
        )
    }
}

export default withAuth(ApplicationStatus);