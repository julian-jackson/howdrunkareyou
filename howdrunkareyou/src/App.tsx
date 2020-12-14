import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";

import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
