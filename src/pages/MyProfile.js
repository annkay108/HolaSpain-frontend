import React, { Component } from 'react';
import {withAuth} from "./../lib/Auth";
import userService from "../lib/user-service";
import cloudinaryService from "./../lib/cloudinary-service";

class MyProfile extends Component {
  state = {
    // currentUser: false,
    userName: '', 
    number: '',
    imageUrl: '',
    city: '',
  }

  componentDidMount() {
    const id  = this.props.user._id;
    console.log("id",id);

    userService.getUserById(id)
      .then((user)=>{
        const { userName, number, imageUrl, city} = user;

        this.setState({userName, number, imageUrl, city})
      })
      .catch((err) => {
        // console.log(err);
      });
  }


  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };


  handleImageChange = event => {
    const file = event.target.files[0];
    this.setState({imageUrl: file});
  };


  handleFormSubmit = event => {
    event.preventDefault();
    const imageFile = new FormData();
    imageFile.append('image', this.state.imageUrl);
        cloudinaryService.imageUpload(imageFile)
        .then(imageUrl => {
            console.log('the image', imageUrl);
        });

    // get all the values from the state
    const { userName, number, city } = this.state;

    // define user id 
    const id  = this.props.user._id;
    const updatedUser = { userName, number, city };
    console.log("this is the update user",updatedUser);

    userService.updateOne(id, updatedUser)
    .then(() => {
        userService.getUserById(id)
        .then((user)=>{
          const { userName, number, imageUrl, city} = user;

          this.setState({userName, number, imageUrl, city})
        })
      })
    .catch(err => {
      // console.log(err)
    });
  };



  render() {
    const { userName, number, imageUrl, city} = this.state;

    return (
      <div className="mui-container">
        <section className="section">
          <div className="page-body">
            <img src={imageUrl} alt="profile"/>
            <h3 className="title is-3">Edit profile</h3>
            <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
              <div className="mui-panel login">
              <div className="field">
                <label className="label">Profile picture</label>
                <div className="control">
                  <input className="input" 
                    type="file"
                    name="imageUrl"
                    onChange={this.handleImageChange}
                  />
                  <br/>
                  <br/>
                </div>
              </div>

              <div className="field">
                <label className="label">Full Name</label>
                <div className="control">
                  <input className="input" 
                    placeholder="Full name"
                    type="text"
                    name="userName"
                    value={userName}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">number</label>
                <div className="control">
                  <input className="input" 
                    placeholder="number"
                    type="text"
                    name="number"
                    value={number}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
    
              <div className="field">
                <label className="label">Current city</label>
                <div className="control">
                  <input className="input" 
                    placeholder="Current city"
                    type="text"
                    name="city"
                    value={city}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="button-container">
                  <button type="submit" className="mui-btn mui-btn--danger mui-btn--raised red">Save changes</button>
              </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    )
  }
}


export default withAuth(MyProfile);