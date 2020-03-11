import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import { Link } from "react-router-dom";
import userService from "../lib/user-service";
import SearchUser from "./Search";

class User extends Component {
  state = {
    userList: null,
    filteredUserList: null,
    userById: null
  };

  listUser = searchValue => {
    if(this.state.userList){
      const filteredUserList = this.state.userList.filter(element => {
        const lowerFood = element.userName.toLowerCase();
        return lowerFood.includes(searchValue.toLowerCase());
      });
      console.log("filteredUserList", filteredUserList);
      this.setState({ filteredUserList: filteredUserList });
    }
  };

  componentDidMount() {
    userService
      .getAllUser()
      .then(data => {
        this.setState({ userList: data , filteredUserList: data});
      })
      .catch(err => console.log(err));
  }

  AddUser(id) {
    userService
      .addUser(id)
      .then(data => {
        userService.getAllUser().then(datas => {
          this.setState({ userList: datas });
        });
      })
      .catch(err => console.log(err));
  }

  Accept(id) {
    userService.AcceptContact(id).then(data => {
      userService.getAllUser().then(datas => {
        this.setState({ userList: datas });
      });
    });
  }

  componentDidUpdate(prevState, prevProps) {}
  

  render() {
    let index = -1;
    if (this.state.userList) {
      index = this.state.userList.findIndex(x => x._id === this.props.user._id);
    }
    return (
      <div>
        <div className="make-it-pretty">
          <div className="item">
            <h1 className="user-list-name"> Find Contact</h1>
            <SearchUser listUser={this.listUser} />
            {this.state.filteredUserList
              ? this.state.filteredUserList.map(el => {
                  if (!el.isAdmin && el._id !== this.props.user._id) {
                    return (
                      <div className="user-list" key={el._id}>
                        <img src={`${el.imageUrl}`} alt="page" />
                        <h3>{el.userName}</h3>
                        <h3>{el.city}</h3>
                        <button
                          className="user-button"
                          onClick={() => {
                            this.AddUser(el._id);
                          }}
                        >
                          Add Contact
                        </button>
                      </div>
                    );
                  }
                })
              : null}

            <div className="container">
              <div id="accordion">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h1 className="mb-0 user-list-name">
                      <button
                        class="btn btn-link request-btn"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Requests
                      </button>
                    </h1>
                  </div>
                  <div
                    id="collapseOne"
                    class="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      {this.state.userList
                        ? this.state.userList[index].requests.map(el => {
                            return (
                              <div className="user-list" key={el._id}>
                                <img src={`${el.imageUrl}`} alt="page" />
                                <h3>{el.userName}</h3>
                                <h3>{el.city}</h3>
                                <button
                                  className="user-button"
                                  onClick={() => {
                                    this.Accept(el._id);
                                  }}
                                >
                                  Accept
                                </button>
                              </div>
                            );
                          })
                        : null}
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card">
                    <div class="card-header" id="headingTwo">
                      <h1 className="mb-0 user-list-name">
                        <button
                          class="btn btn-link collapsed request-btn"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Pending
                        </button>
                      </h1>
                    </div>
                    <div
                      id="collapseTwo"
                      class="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion"
                    >
                      <div class="card-body">
                        {this.state.userList
                          ? this.state.userList[index].pending.map(el => {
                              return (
                                <div className="user-list" key={el._id}>
                                  <img
                                    src={`${el.imageUrl}`}
                                    alt="page"
                                  />
                                  <h3>{el.userName}</h3>
                                  <h3>{el.city}</h3>
                                </div>
                              );
                            })
                          : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <h1 className="user-list-name">Contact List</h1>
            {this.state.userList
              ? this.state.userList[index].friends.map(el => {
                  return (
                    <div className="user-list" key={el._id}>
                      <img src={`${el.imageUrl}`} alt="image page" />
                      <h3>{el.userName}</h3>
                      <Link to={`/profile/${el._id}`}>
                        <h3>View Profile</h3>
                      </Link>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(User);
