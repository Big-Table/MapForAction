import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import IncidentsContainer from "./containers/IncidentsContainer";
import FlexColumn from "./Theme/FlexColumn";
import FlexRow from "./Theme/FlexRow";
import Map from "./Map";
import IncidentForm from "./components/IncidentForm";

class App extends React.Component {
  state = {
    incidents: [],
    currentIncident: null,
  };

  deleteCurrentIncident = () => {
    this.setState({
      currentIncident: null,
    });
  };

  setCurrentIncident = (incident) => {
    this.setState({
      currentIncident: incident,
    });
  };

  setIncidents = (incidents) => {
    this.setState({
      ...this.state,
      incidents,
    });
  };

  render() {
    return (
      <Router>
        <FlexColumn style={{ width: "70vw", height: "100vh" }}>
          {/* Map goes here */}
          <Map
            deleteCurrentIncident={this.deleteCurrentIncident}
            setCurrentIncident={this.setCurrentIncident}
            setIncidents={this.setIncidents}
            incidents={this.state.incidents}
          />
          {/* <IncidentForm></IncidentForm> */}
        </FlexColumn>
        <FlexColumn style={{ width: "30vw", height: "100vh" }}>
          <Switch>
            {/* Routes to different side pages go here */}
            <Route
              path="/incidents"
              render={(routerProps) => <IncidentsContainer {...routerProps} />}
            />
          </Switch>
        </FlexColumn>
      </Router>
    );
  }
}

export default App;
