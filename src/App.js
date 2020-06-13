import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import IncidentsContainer from "./containers/IncidentsContainer";
import FlexColumn from "./Theme/FlexColumn";
import FlexRow from "./Theme/FlexRow";
import Map from "./Map";
import IncidentForm from './components/IncidentForm'
import  AddIncidentButton from './components/AddIncidentButton'
import TwitterContainer from './components/TwitterContainer'

import Nav from './Nav'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { incidentForm: false};
  }

  handleShowForm = () => {
    this.setState({...this.state, incidentForm: !this.state.incidentForm})
  }


  render() {
    return (
      <div style={{backgroundColor: 'black'}}>
        <Router>
          <FlexRow>
            <FlexColumn style={{width:"70vw", height:"100vh"}}>
                  <Map />
                  <AddIncidentButton onClick={this.handleShowForm} />
                  {this.state.incidentForm && <IncidentForm />}
            </FlexColumn>
            <FlexColumn style={{width:"30vw", height:"100vh"}}>
              <div style={{height: '150px', position: 'relative'}}>
                <Nav/>
              </div>
              <Switch>
                {/* Routes to different side pages go here */}
                <Route
                  path="/"
                  render={(routerProps) => (
                    <IncidentsContainer {...routerProps} />
                  )}
                />
              </Switch>
            </FlexColumn>
          </FlexRow>
        </Router>
      </div>
    );
  }
}

export default App;


{/* <TwitterContainer /> */ }