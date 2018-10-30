import React, { Component } from 'react';
//import './App.css';

export default class listItem extends Component{
    render() {
        return (<li className="list-group-item" tabIndex="0"
        onClick={() => this.props.listItemClick(this.props)}
        aria-labelledby="venue"
        >
            {this.props.name}
        </li>);
    }
}
