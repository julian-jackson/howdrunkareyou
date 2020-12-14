import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";

import Main from "./components/Main";
import Results from "./components/Results"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/results" component={Results} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
