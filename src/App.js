import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Landing from "./Components/Landing"
import { Provider } from "react-redux"
import store from "./store"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={Landing}></Route>
        </Router>
      </Provider>
    );
  }
}

export default App;
