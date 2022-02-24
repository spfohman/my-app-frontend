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
  }, []);

  function addBooks(newBook) {
    const updatedBooks = [newBook, ...books];
    setBooks(updatedBooks);
  }

  function addReview(newReview) {
    const bookToUpdate = books.find((book) => {
      return book.id === newReview.book_id;
    });

    const updatedReviews = [newReview, ...bookToUpdate.reviews];
    bookToUpdate.reviews = updatedReviews;
    setBooks(
      books.map((book) => (book.id === bookToUpdate.id ? bookToUpdate : book))
    );

    setReviews(updatedReviews);
  }

  function handleUpdateLikes(updateLikes) {
    const updatedLikes = books.map((book) => {
      return book.id === updateLikes.id ? updateLikes : book;
    });
    setBooks(updatedLikes);
  }
  function handleDeleteReview(deletedReview) {
    const bookToUpdate = books.find((book) => {
      return book.id === deletedReview.book_id;
    });

    const updatedReview = bookToUpdate.reviews.filter((review) => {
      return review.id !== deletedReview.id;
    });

    bookToUpdate.reviews = updatedReview;
    setBooks(
      books.map((book) => (book.id === bookToUpdate.id ? bookToUpdate : book))
    );
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
