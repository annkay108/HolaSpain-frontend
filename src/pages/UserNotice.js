import React, { Component } from 'react';
import {withAuth} from "./../lib/Auth";
import noticeService from "./../lib/notice-service";

class AddTheNotice extends Component {
    state ={
        noticeArray: null
    }

    componentDidMount(){
        noticeService.getAllNotice()
        .then(data => this.setState({noticeArray: data}))
        .catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                {this.state.noticeArray?
                    this.state.noticeArray.map(el =>{
                        return(
                            <div key={el._id}>
                                <h3>{el.title}</h3>
                                <p>{el.description}</p>
                            </div>
                        )
                    })
                :null
                }
            </div>
        )
    }
}

export default withAuth(AddTheNotice);