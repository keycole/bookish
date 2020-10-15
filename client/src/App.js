import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import "./App.css";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BooksLanding from "./pages/BooksLanding";
import BookSearch from './pages/BookSearch';
import bookTitle from './components/SearchForm';
function App() {
  // const title = [title, setTitle] = useState({
  //   title: "Frankenstein"
  // })

  useEffect(() => {
    // console.log("API.getbooks = ", API.getBooks());
    // API.getBooks().then((res => {
    //   console.log("Books = ", res.data.items);
    // }))
    console.log("The bookTitle = ", bookTitle.bookTitle);
  });

  return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path={"/books"}>
            <BooksLanding />
          </Route>
          <Route exact path={["/", "/search"]}>
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
