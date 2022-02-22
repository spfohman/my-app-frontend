import React, { useState } from "react";
import AddReview from "./AddReview";

const EachBook = ({ book, handleUpdateLikes, handleDeleteReview, reviews }) => {
  const [displayReview, setDisplayReview] = useState(false);

  const showReview = (event) => {
    event.preventDefault();
    setDisplayReview(!displayReview);
  };

  function updateLikes() {
    const addLikes = {
      likes: book.likes + 1,
    };

    fetch(`http://localhost:9292/books/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addLikes),
    })
      .then((response) => response.json())
      .then(handleUpdateLikes);
  }

  function deleteReview(id) {
    fetch(`http://localhost:9292/reviews/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => handleDeleteReview(data));
  }

  const eachReview = book.reviews?.map((review) => (
    <li key={review.id}>
      {review.text}
      <br />
      <button onClick={() => deleteReview(review.id)}>Delete Review </button>
    </li>
  ));

  return (
    <>
      <div className="bookCard">
        <h3>{book.title}</h3>
        <h4>{book.author}</h4>

        <button className="button" onClick={updateLikes}>
          Likes: {book.likes}
        </button>
        <br />
        <button className="button" onClick={showReview}>
          {displayReview ? "Hide Reviews" : "Show Reviews"}
        </button>

        {displayReview ? <ul>{eachReview}</ul> : null}
        <AddReview book={book} />
      </div>
      <hr />
    </>
  );
};

export default EachBook;
