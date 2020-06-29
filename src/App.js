import React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import IncidentsContainer from "./containers/IncidentsContainer";
import IncidentDetailContainer from "./containers/IncidentDetailContainer";
import FlexColumn from "./Theme/FlexColumn";
import FlexRow from "./Theme/FlexRow";
import Map from "./components/Map";
import IncidentForm from "./components/IncidentForm";
import AddIncidentButton from "./components/AddIncidentButton";
import AddQueueButton from "./components/AddQueueButton";
import IncidentQueueGrid from "./components/IncidentQueueGrid";
import Nav from "./Nav";
import {
  getIncidents,
  getCurrentUser,
  getApprovedIncidents,
} from "./requests/requests.js";
import axios from "axios";
import _ from 'lodash';

class App extends React.Component {
  state = {
    incidents: [],
    currentIncident: null,
    incidentForm: false,
    searchForm: "",
    mapCenter: {
      lat: 40.7278722,
      lng: -73.9572483,
    },
    currentUser: null,
    grid: false,
  };

  componentDidMount() {
    this.updateIncidents();
    this.updateCurrentUser();
  }

  updateCurrentUser = async () => {
    let user = await axios.get("/auth/currentUser", {
      withCredentials: true,
    });

    this.setState({
      ...this.state,
      currentUser: user.data,
    });
  };

  // updateCurrentUser = () => {
  //   getCurrentUser().then((user) => {
  //     console.log(user);
  //   });
  // };

  updateIncidents = () => {
    getApprovedIncidents().then((incidents) => this.setIncidents(incidents.data));
  };
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

  setIncidents = (incidents) => {
    this.setState({
      incidents,
    });
  };

  setMapCenter = (center) => {
    this.setState({
      mapCenter: center,
    });
  };

  updateForm = (event) => {
    this.setState({
      searchForm: event.target.value
    })
  };

  handleShowGrid = () => {
    this.setState({
      grid: !this.state.grid,
    });
  };

  handleUserNotLoggedIn = () => {
    alert('You must login before submitting an incident!')
  }
  render() {
    console.log(this.state.currentUser)
    console.log(this.state.incidents);
    return (
      <Router>
        <FlexRow style={{ backgroundColor: "black" }}>
          <FlexColumn style={{ width: "70vw", height: "100vh" }}>
            {/* Map goes here */}
            <Map
              deleteCurrentIncident={this.deleteCurrentIncident}
              setCurrentIncident={this.setCurrentIncident}
              setIncidents={this.setIncidents}
              incidents={this.state.incidents}
              mapCenter={this.state.mapCenter}
              setMapCenter={this.setMapCenter}
            />
            <div style={{ width: "100%", position: "absolute", top: 0 }}>
              { this.state.currentUser ?
               <AddIncidentButton onClick={this.handleShowForm} />
               : 
               <AddIncidentButton onClick={this.handleUserNotLoggedIn}/>
              } 
              { this.state.currentUser && this.state.currentUser.moderator && 
                <AddQueueButton></AddQueueButton>
              }
              {/* <AddQueueButton onClick={this.handleShowGrid}></AddQueueButton> */}
            </div>
            {this.state.incidentForm && (
              <IncidentForm
                onClick={this.handleShowForm}
                updateIncidents={this.updateIncidents}
              />
            )}
            {this.state.incidentForm ||
              (this.state.grid && <div id="overlay"></div>)}
            {this.state.grid && (
              <IncidentQueueGrid
                grid={this.handleShowGrid}
                incidents={this.state.incidents}
              ></IncidentQueueGrid>
            )}
          </FlexColumn>
          <FlexColumn
            style={{
              width: "35vw",
              height: "100vh",
              backgroundColor: "#000000",
            }}
          >
            <Nav
              currentIncident={this.state.currentIncident}
              search={this.state.searchForm}
              updateForm={this.updateForm}
              currentUser={this.state.currentUser}
            />
            <br></br>
            <Switch>
              {/* Routes to different side pages go here */}
              <Route
                exact
                path="/"
                render={(routerProps) =>
                  this.state.currentIncident ? (
                    <IncidentDetailContainer
                      {...routerProps}
                      incident={this.state.currentIncident}
                      deleteCurrentIncident={this.deleteCurrentIncident}
                      currentUser={this.state.currentUser}
                    />
                  ) : (
                    <IncidentsContainer
                      {...routerProps}
                      incidents={this.state.incidents}
                      setCurrentIncident={this.setCurrentIncident}
                      setMapCenter={this.setMapCenter}
                      search={this.state.searchForm}
                    />
                  )
                }
              />

              <Route
                path="/moderator"
                render={(routerProps) => (
                  <IncidentQueueGrid
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



