import React, { Component } from 'react';
import { withAuth } from '../lib/Auth';
import cloudinaryService from "../lib/cloudinary-service";

class StartApplication extends Component {
    handleImageChange =(event) => {
        const file = event.target.files[0];
        const imageFile = new FormData();

        imageFile.append('image', file);

        cloudinaryService.imageUpload(imageFile)
        .then(imageUrl => {
            console.log('the image', imageUrl);
        });
    }

    handleApplicationChange =(event) => {
        const file = event.target.files[0];
        const applicationFile = new FormData();

        applicationFile.append('application', file);

        cloudinaryService.applicationUpload(applicationFile)
        .then(applicationUrl => {
            console.log('the image', applicationUrl);
        });
    }

    handleDocumentChange = (event) => {
        const file = event.target.files[0];
        const documentFile = new FormData();

        documentFile.append('document', file);

        cloudinaryService.documentUpload(documentFile)
        .then(documentUrl => {
            console.log('the image', documentUrl);
        });
    }

    render() {
        return (
            <div>
                Start your application
                <h4>Download the form here</h4>
                <a href="./Visa.pdf" download="Visa">Download</a>
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
            </div>
        )
    }
}

export default withAuth(StartApplication);