import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import IncidentsContainer from "./containers/IncidentsContainer";
import FlexColumn from "./Theme/FlexColumn";
import FlexRow from "./Theme/FlexRow";
import Map from "./Map";
import IncidentForm from "./components/IncidentForm";
import AddIncidentButton from "./components/AddIncidentButton";
import Tweet from "./components/Tweet";
import Nav from "./Nav";
import { getIncidents } from "./requests/requests.js";

class App extends React.Component {
  state = {
    incidents: [],
    currentIncident: null,
    incidentForm: false,
  };

  componentDidMount() {
    this.updateIncidents();
  }

  updateIncidents = () =>
    getIncidents().then((incidents) => this.setIncidents(incidents));

  handleShowForm = () => {
    this.setState({ incidentForm: !this.state.incidentForm });
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

  setIncidents = (incidents) =>
    this.setState({
      incidents,
    });

  render() {
    return (
      <Router>
        <FlexRow>
          <FlexColumn style={{ width: "70vw", height: "100vh" }}>
            {/* Map goes here */}
            <Map
              deleteCurrentIncident={this.deleteCurrentIncident}
              setCurrentIncident={this.setCurrentIncident}
              setIncidents={this.setIncidents}
              incidents={this.state.incidents}
            />
            <div style={{ width: "100%", position: "absolute", top: 0 }}>
              <AddIncidentButton onClick={this.handleShowForm} />
            </div>
            {this.state.incidentForm && (
              <IncidentForm
                onClick={this.handleShowForm}
                updateIncidents={this.updateIncidents}
              />
            )}
          </FlexColumn>
          <FlexColumn
            style={{
              width: "30vw",
              height: "100vh",
              backgroundColor: "#000000",
            }}
          >
            <Nav />

            <Switch>
              {/* Routes to different side pages go here */}
              <Route
                path="/"
                render={(routerProps) => (
                  <IncidentsContainer
                    {...routerProps}
                    incidents={this.state.incidents}
                  />
                )}
              />
            </Switch>
          </FlexColumn>
        </FlexRow>
      </Router>
    );
  }
}

export default App;

{
  /* <TwitterContainer /> */
}
