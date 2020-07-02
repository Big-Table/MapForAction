import axios from "axios";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddIncidentButton from "./components/buttons/AddIncidentButton";
import AddQueueButton from "./components/buttons/AddQueueButton";
import AddWhatsNextButton from "./components/buttons/AddWhatsNextButton";
import ImageForm from "./components/forms/ImageForm";
import IncidentForm from "./components/forms/IncidentForm";
import Map from "./components/incidentDetails/Map";
import IncidentQueueGrid from "./components/pendingEvents/IncidentQueueGrid";
import WhatsNext from "./components/pendingEvents/WhatsNext";
import IncidentDetailContainer from "./containers/IncidentDetailContainer";
import IncidentsContainer from "./containers/IncidentsContainer";
import Nav from "./navigation/Nav";
import NoAccess from './navigation/NoAccess';
import NotFound from './navigation/NotFound';
import { getApprovedIncidents } from "./requests/requests.js";
import FlexColumn from "./Theme/FlexColumn";
import FlexRow from "./Theme/FlexRow";

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
    lastIncidentPostedID: '', 
    submitted: false,
    FAQ: false, 
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
      console.log(event.target.value)
      
      this.setState({
        searchForm: event.target.value
      })
    
   
  }

  handleShowGrid = () => {
    this.setState({
      grid: !this.state.grid,
    });
  };

  handleUserNotLoggedIn = () => {
      alert('Sign in through Google to submit an incident!')
  }

  handleLastIncidentID = (id) => {
    this.setState({
      lastIncidentPostedID: id
    })
  }

  handleSubmittedIncident = (present) => {
    this.setState({
      submitted: !this.state.submitted
    })
    if(this.state.submitted === true && present){
      alert("Thank you for effort! Your incident is pending review!")
    }
  }

  handleFAQ = () => {
    this.setState({
      FAQ: !this.state.FAQ
    })
  }

 

  render() {
    console.log(this.state.currentUser)
    console.log(this.state.incidents);
    console.log(this.state.lastIncidentPostedID)
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
              <AddWhatsNextButton onClick={this.handleFAQ}></AddWhatsNextButton>
              {this.state.FAQ && <WhatsNext></WhatsNext>}
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
            {this.state.submitted && 
            <ImageForm 
              lastIncidentID={this.state.lastIncidentPostedID}
              submitted={this.handleSubmittedIncident}
            ></ImageForm>}
            {this.state.incidentForm && (
              <IncidentForm
                submitted={this.handleSubmittedIncident}
                lastIncident={this.handleLastIncidentID}
                showForm={this.handleShowForm}
                updateIncidents={this.updateIncidents}
                currentUser={this.state.currentUser}
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
              // position: 'relative',
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
              { this.state.currentUser && 
              <Route
                path="/moderator"
                render={(routerProps) => (
                  <IncidentQueueGrid
                    {...routerProps}
                    incidents={this.state.incidents}
                  />
                )}
              />
              }
              { !this.state.currentUser && 
                <Route
                  path="/moderator"
                  render={(routerProps) => (
                    <NoAccess
                      {...routerProps}
                    />
                  )}
               />
              }
              <Route
               path='*'
               render={(routerProps) => (
                <NotFound
                  {...routerProps}
                />
              )}
              status={404}
           />
            </Switch>
          </FlexColumn>
        </FlexRow>
      </Router>
    );
  }
}

export default App;



