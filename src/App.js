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
      <Router >
        <FlexColumn style={{width: "70vw", height: "100vh"}}>
        {/* Map goes here */}
            <Map />
            <AddIncidentButton onClick={this.handleShowForm}/>
          {this.state.incidentForm && <IncidentForm />}
        </FlexColumn>
        <FlexColumn style={{ width: "30vw", height: "100vh" }}>
        <Switch >
          {/* Routes to different side pages go here */}
            <Route path="/incidents" render={(routerProps) => < IncidentsContainer {...routerProps} />} />
        </Switch>
        </FlexColumn>
      </Router>
    );
  }
}

export default App;


{/* <TwitterContainer /> */ }