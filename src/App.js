import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import IncidentsContainer from "./containers/IncidentsContainer";
import FlexColumn from "./Theme/FlexColumn";
import FlexRow from "./Theme/FlexRow";
import Map from "./Map";
import IncidentForm from "./components/IncidentForm";
import AddIncidentButton from "./components/AddIncidentButton";
import Nav from "./Nav";
import { getIncidents } from "./requests/requests.js";
import TwitterContainer from "./containers/TwitterContainer";

class App extends React.Component {
  state = {
    incidents: [],
    currentIncident: null,
    incidentForm: false,
    searchForm: ''
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

  updateForm = (event) => {
    console.log("here")
    this.setState({
      searchForm: event.target.value
    })
  }

  search = () => {
    let searchedIncidents = this.state.incidents
    searchedIncidents.filter((incident) => {
      incident.title.includes(this.state.search)
    })
    this.setState({
      incidents: searchedIncidents
    })
  }

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
            {this.state.incidentForm && (
              <div id="overlay">
              </div>
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
                  // <IncidentsContainer
                  //   {...routerProps}
                  //   incidents={this.state.incidents}
                  // />
                  <TwitterContainer tweets={[{ url: "https://twitter.com/gratisteph/status/1272185222499573764"}, {url: "https://twitter.com/coder_blvck/status/1272185231030837250"}]}/>
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