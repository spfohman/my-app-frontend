import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import Reviews from "./Reviews";
import Books from "./Books";
import FormPage from "./FormPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);
  return (
    <div className="App">
      <NavBar />
      <br />
      <Route path="/reviews">
        <Reviews />
      </Route>
      <Route path="/books">
        <Books books={books} />
      </Route>
      <Route path="/formpage">
        <FormPage />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </div>
  );
}

export default App;
