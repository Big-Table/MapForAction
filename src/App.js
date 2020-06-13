import React from 'react';
import {
  Route, 
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import './App.css'
import IncidentsContainer from './containers/IncidentsContainer'
import FlexColumn from './Theme/FlexColumn';
import Map from "./Map";
import IncidentForm from './components/IncidentForm'

class App extends React.Component {
  
  render(){

    return (
      <Router >
        <FlexColumn>
        {/* Map goes here */}
          {/* <Map /> */}
          <IncidentForm></IncidentForm>
        </FlexColumn>
        <FlexColumn>
        <Switch >
          {/* Routes to different side pages go here */}
          <Route path="/incidents" render={(routerProps) => < IncidentsContainer {...routerProps} />} />
          
        </Switch>
        </FlexColumn>
      </Router>
    );
  }
};

export default App
