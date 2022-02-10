import React, { useState } from "react";

const EachBook = ({ book }) => {
  const [displayReview, setDisplayReview] = useState(false);
  const showReview = (event) => {
    event.preventDefault();
    setDisplayReview(!displayReview);
  };
  return (
    <div className="bookCard">
      <h3>{book.title}</h3>
      <h4>{book.author}</h4>

      <button className="button">Likes: {book.likes}</button>
      <br />
      <button className="button" onClick={showReview}>
        {displayReview ? "Hide Reviews" : "Show Reviews"}
      </button>
      {displayReview ? <p>{book.reviews[0].text}</p> : null}
      <hr />
    </div>
  );
};

export default EachBook;
