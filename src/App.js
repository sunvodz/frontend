import React, { Component } from 'react';
import './App.css';
import Home from './Home/Home';
import Notifications from './Notifications/Notifications';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="bgbody">
      <Router>
        <Switch>
        <Route path='/' exact={true} component={Home}/>
        
        
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
