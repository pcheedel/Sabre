import React, { PureComponent } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Landing from "./Components/landing"

class App extends PureComponent {
  render() {
    return (
      <Router
        history={browserHistory}
        routes={[
          <Route path="/" component={Landing}>
          </Route>
        ]}
      />
    );
  }
}

export default App;
