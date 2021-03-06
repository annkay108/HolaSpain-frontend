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
        appStatus: null
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
                    <div>
                        <h1>Thank you submitting your application you can see your application status <Link to="/applicationStatus">here</Link></h1>
                    </div>
                    :<>
                        <h1>Start your application</h1>
                        <h4>Download the form here <a href="./Visa.pdf" download="Visa">Download</a></h4>
                        <div className="mui-container notice-item">
                        <form onSubmit={this.handleFormSubmit}>
                        <div className ="mui-panel">
                            <label>Upload your image here</label>
                            <input
                                type="file"
                                name="image"
                                onChange={this.handleImageChange}
                            />
                            <br/>
                            <br/><br/>
                            <label>Upload your application form here</label>
                            <input
                                type="file"
                                name="application"
                                onChange={this.handleApplicationChange}
                            />
                            <br/><br/><br/>
                            <label>Upload your documents here</label>
                            <input
                                type="file"
                                name="document"
                                onChange={this.handleDocumentChange}
                            />
                            <br/><br/><br/>
                            <div className="button-container">
                            <input 
                            className="mui-btn mui-btn--danger mui-btn--raised red" 
                            type="submit" 
                            value="Submit"/>
                            </div>
                        </div>
                        </form>
                        </div>
                    </>
                }
            </div>
        )
    }
}

export default withAuth(StartApplication);