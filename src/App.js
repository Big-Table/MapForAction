import React from 'react';
import {
  Route, 
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import './App.css'
import IncidentsContainer from './containers/IncidentsContainer'


class App extends React.Component {
  
  render(){

    return (
      <Router >
        {/* Map goes here */}
        <Switch >
          {/* Routes to different side pages go here */}
          <Route path="/incidents" render={(routerProps) => < IncidentsContainer {...routerProps} />} />

        </Switch>
      </Router>
    );
  }
};

export default App
