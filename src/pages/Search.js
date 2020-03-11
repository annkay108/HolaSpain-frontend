import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {
        listUser: ""
    }
    
    handleChange = e =>{
        let {value, name} = e.target;
        this.setState({[name]: value});
        this.props.listUser(value);
    }

    render() {
        return (
            <div className="searchBar">
                <input className="searchInput" name="listUser" placeholder="Search contact" value={this.state.listUser} onChange={this.handleChange}/>
            </div>
        )
    }
}