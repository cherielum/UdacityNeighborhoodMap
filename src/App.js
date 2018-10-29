import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import MapDiv from './components/MapDiv';
import InfoModal from './components/InfoModal';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="NavBar">
              <Route exact path= "/" component={ NavBar } />
        </div>
        <div id="SideBar">
          <Route exact path= "/" component={ SideBar } />
        </div>
        <div id="MapDiv">
          <MapDiv/>
        </div>
        <div id="InfoModal">
          <Route exact path= "/" component={ InfoModal } />
        </div>
      </div>

    );
  }
}

export default App;
