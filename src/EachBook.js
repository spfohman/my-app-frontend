import React, { useState } from "react";
import AddReview from "./AddReview";

const EachBook = ({ book, handleUpdateLikes }) => {
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

  // const reviews = book.reviews.map((review) => (
  //   <li key={review.id}>{review.text}</li>
  // ));
  return (
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

      {displayReview ? (
        <p>
          {book.reviews.map((review) => (
            <li key={review.id}>{review.text}</li>
          ))}
        </p>
      ) : null}
      <AddReview book={book} />
      <hr />
    </div>
  );
};

export default EachBook;
