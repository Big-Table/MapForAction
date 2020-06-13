import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import IncidentsContainer from "./containers/IncidentsContainer";
import FlexColumn from "./Theme/FlexColumn";
import FlexRow from "./Theme/FlexRow";
import Map from "./Map";

class App extends React.Component {
  render() {
    return (
      <Router>
        <FlexRow>
          <FlexColumn style={{width:"65%", height:"100%"}}>
            {/* Map goes here */}
            <Map />
          </FlexColumn>
          <FlexColumn>
            <Switch>
              {/* Routes to different side pages go here */}
              <Route
                path="/incidents"
                render={(routerProps) => (
                  <IncidentsContainer {...routerProps} />
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
