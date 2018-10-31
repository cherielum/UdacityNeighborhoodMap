import React, { Component } from 'react';
//import './App.css';
import ListItem from './ListItem';


export default class InfoModal extends Component{
    render() {
        return (<ul className="list-group">
          {this.props.venues && this.props.venues.map((venue, index) =>
                 (<ListItem key={index} {...venue} listItemClick={this.props.listItemClick} />)
           )}
        </ul>);
      }
    }