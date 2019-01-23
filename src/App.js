import React, { Component } from 'react';
import './App.css';
import EventCalendar from './containers/eventCalendar';
import UserProfile from './containers/authUserProfile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>
        <span className="glyphicon glyphicon-calendar" style={{marginRight: '10px'}}></span>
         OI Calendar </h1>
         <UserProfile/>
        </header>
        <EventCalendar />
        <footer>
          <hr/>
          <h5>Developed By <a href="https://openintents.org">OpenIntents</a>, based on work by <a href="https://github.com/yasnaraj/react-calendar-events-example">Yasna R.</a> | {(new Date().getFullYear()).toString()} <br/>
          Using <a href="https://glyphicons.com">glyphicons.com</a></h5>
          </footer>
      </div>
    );
  }
}

export default App;
