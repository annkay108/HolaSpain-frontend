import React, { Component } from 'react';
import {withAuth} from "./../lib/Auth";
import noticeService from "./../lib/notice-service";

class AddTheNotice extends Component {
    state ={
        title: "",
        description: ""
    }

    handleFormSubmit = event =>{
        event.preventDefault();
        const {title, description} = this.state;

        noticeService.addTheNotice({title, description})
        .then(console.log("Notice has been added"))
        .catch(err => console.log(err));
    }

    handleChange = event =>{
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    render() {
        const {title, description} = this.state;
        return (
            <div>
                <h1>Add the Notice</h1>

                <form onSubmit = {this.handleFormSubmit}>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={this.handleChange}
                    />

                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={description}
                        onChange={this.handleChange}
                    >
                    </textarea>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default withAuth(AddTheNotice);