import React, { Component } from 'react';
import '../App.css';
import InfoModal from './InfoModal';

export default class sidebar extends Component{
        constructor() {
          super();
          this.state = {
            query: '',
            venues: []
          };
        }

        // filters search
        workFilterVenues = () => {
          if(this.state.query.trim() !== "") {
            const venues = this.props.venues.filter(venue =>
              venue.name.toLowerCase().includes(this.state.query.toLowerCase()))
              return venues;
          }
            return this.props.venues;
        };

        workChange = event => {
            this.setState({ query: event.target.value });

            const markers = this.props.venues.map(venue => {
              const matched = venue.name.toLowerCase().includes(event.target.value.toLowerCase());
              const marker = this.props.markers.find(marker => marker.id === venue.id);
              if(matched) {
                marker.isVisible = true;
              } else {
                marker.isVisible = false;
              }
              return marker;
            });
            this.props.updateSuperState({ markers })
        };

        render() {
          return (<div id="SideBar">
            <h1> Museums in Atlanta!</h1>
            <form className="form-inline mt-4 mb-4">
              <i className="fa fa-search" aria-hidden="true"></i>
                <input className="form-control form-control-sm ml-3 w-75" type={"search"} placeholder={"Type museum"} aria-label="Search" onChange={this.workChange}/>
            </form>
            <InfoModal {...this.props}
            venues={this.workFilterVenues()}
            listItemClick={this.props.listItemClick}/>
          </div>);
        }
      }