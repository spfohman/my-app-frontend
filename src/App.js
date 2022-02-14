import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import Books from "./Books";
import FormPage from "./FormPage";
import { Route } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

function App() {
  const [books, setBooks] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetch(`http://localhost:9292/books`)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);
  function addBooks(newBook) {
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
  }
  function addReview(newReview) {
    const updatedReview = [...reviews, newReview];
    setReviews(updatedReview);
  }
  const booksToDisplay = books.filter((book) => {
    return book.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="App">
      <NavBar />
      <br />
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <Route path="/books">
        <Books books={booksToDisplay} addReview={addReview} />
      </Route>
      <Route path="/formpage">
        <FormPage addBooks={addBooks} />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </div>
  );
}

export default App;
