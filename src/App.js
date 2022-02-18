import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import Books from "./Books";
import FormPage from "./FormPage";
import { Route } from "react-router-dom";
import { useState, useEffect } from "react";

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
    fetch(`http://localhost:9292/reviews`)
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  function addBooks(newBook) {
    const updatedBooks = [newBook, ...books];
    setBooks(updatedBooks);
  }

  function addReview(newReview) {
    const updatedReview = [newReview, ...reviews];
    setReviews(updatedReview);
  }

  function handleUpdateLikes(id) {
    const updatedLikes = books.map((book) => {
      return book.id === id.id ? id : book;
    });
    setBooks(updatedLikes);
  }
  function handleDeleteReview(id) {
    const updatedReview = reviews.map((review) => {
      return review.id !== id;
    });
    setReviews(updatedReview);
  }
  const booksToDisplay = books.filter((book) => {
    return book.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="App">
      <NavBar />
      <br />
      <Route path="/books">
        <Books
          handleUpdateLikes={handleUpdateLikes}
          addReview={addReview}
          books={books}
          booksToDisplay={booksToDisplay}
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
          handleDeleteReview={handleDeleteReview}
          reviews={reviews}
        />
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
