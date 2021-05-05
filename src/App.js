import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import HomePage from "./pages/homepage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/account" component={HomePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
