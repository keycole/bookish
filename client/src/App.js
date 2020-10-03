import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          {/* <Route exact path={["/", "/books"]}>
            <Books />
          </Route> */}
          {/* <Route exact path="/books/:id">
            <Detail />
          </Route> */}
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
