import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import noticeService from "./../lib/notice-service";

class AddTheNotice extends Component {
  state = {
    title: "",
    description: "",
    noticeList: null,
    isLoading: true
  };

  componentDidMount() {
    noticeService
      .getAllNotice()
      .then(data => {
        this.setState({ noticeList: data, isLoading:false });
      })
      .catch(err => console.log(err));
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { title, description } = this.state;
    noticeService
      .addTheNotice({ title, description })
      .then( () => {
        noticeService
        .getAllNotice()
        .then(data => {
          this.setState({noticeList: null});
            this.setState({ noticeList: data });
        })
      })
      .catch(err => console.log(err));
  };

  componentDidUpdate(nextProps, nextState){}

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  deleteNoticeId(id){
      noticeService
      .deleteNoticeById(id)
      .then( () => {
        noticeService
        .getAllNotice()
        .then(data => {
            this.setState({ noticeList: data });
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    const { title, description } = this.state;
    return (
      <div className="notice">
        <div className="mui-container notice-item">
          <h1>Add the Notice</h1>

          <form onSubmit={this.handleFormSubmit}>
          <div className ="mui-panel login notice-form">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
            <br />
            <label>Description:</label>
            <textarea
              name="description"
              value={description}
              onChange={this.handleChange}
            ></textarea>
            <div className="button-container">
              <input
              className="mui-btn mui-btn--danger mui-btn--raised red" 
              type="submit" 
              value="Submit" />
            </div>
          </div>
          </form>
        </div>
        <div className="notice-item">
            {this.state.noticeList?
                this.state.noticeList.map(el=>{
                    return(
                        <div key={el._id} className="notice-list">
                            <h1>{el.title}</h1>
                            <p>{el.description}</p>
                            <div className="button-container">
                            <button 
                            onClick={()=>this.deleteNoticeId(el._id)}
                            className="mui-btn mui-btn--danger mui-btn--raised"
                            >Delete</button>
                            </div>
                        </div>
                    )
                })
            :null}
        </div>
      </div>
    );
  }
}

export default withAuth(AddTheNotice);