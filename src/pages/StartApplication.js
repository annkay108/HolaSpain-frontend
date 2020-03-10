import React, { Component } from 'react';
import { withAuth } from '../lib/Auth';
import { Link } from "react-router-dom";
import cloudinaryService from "../lib/cloudinary-service";
import UserService from "../lib/user-service";


class StartApplication extends Component {
    state = {
        imageUrl: null,
        applicationUrl: null,
        documentUrl: null,
        appStatus: false
    }
    handleImageChange =(event) => {
        const file = event.target.files[0];
        this.setState({imageUrl: file});
    }

    handleApplicationChange =(event) => {
        const file = event.target.files[0];
        this.setState({applicationUrl: file});
    }

    handleDocumentChange = (event) => {
        const file = event.target.files[0];
        this.setState({documentUrl: file});
    }

    handleFormSubmit = event =>{
        event.preventDefault();
        const imageFile = new FormData();
        const documentFile = new FormData();
        const applicationFile = new FormData();

        imageFile.append('image', this.state.imageUrl);

        cloudinaryService.imageUpload(imageFile)
        .then(imageUrl => {
            console.log('the image', imageUrl);
        });

        documentFile.append('document', this.state.documentUrl);

        cloudinaryService.documentUpload(documentFile)
        .then(documentUrl => {
            console.log('the document', documentUrl);
        });

        applicationFile.append('application', this.state.applicationUrl);

        cloudinaryService.applicationUpload(applicationFile)
        .then(applicationUrl => {
            console.log('the application', applicationUrl);
        });

        UserService.setStatus()
        .then(()=>this.setState({appStatus: true}));
    }

    render() {
        return (
            <div>
                {
                    this.state.appStatus?
                    <div>Thank you submitting your application you can see your application status <Link to="/applicationStatus">here</Link></div>
                    :<>
                        <h1>Start your application</h1>
                        <h4>Download the form here</h4>
                        <a href="./Visa.pdf" download="Visa">Download</a>
                        <form onSubmit={this.handleFormSubmit}>
                            <label>Upload your image here</label>
                            <input
                                type="file"
                                name="image"
                                onChange={this.handleImageChange}
                            />
                            <label>Upload your application form here</label>
                            <input
                                type="file"
                                name="application"
                                onChange={this.handleApplicationChange}
                            />
                            <label>Upload your documents here</label>
                            <input
                                type="file"
                                name="document"
                                onChange={this.handleDocumentChange}
                            />
                            <input type="submit" value="Submit"/>
                        </form>
                    </>
                }
            </div>
        )
    }
}

export default withAuth(StartApplication);