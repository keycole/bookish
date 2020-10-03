import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import "./App.css";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BooksLanding from "./pages/BooksLanding";
import BookSearch from './pages/BookSearch';

function App() {
  return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path={["/", "/books"]}>
            <BooksLanding />
          </Route>
          <Route exact path={"/search"}>
            <BookSearch />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
