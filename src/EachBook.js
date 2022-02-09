import React from "react";

const EachBook = ({ book }) => {
  return (
    <div className="bookCard">
      <h3>{book.title}</h3>
      <h4>{book.author}</h4>
      <br />
      <button>Likes: {book.likes}</button>
      <button>Show Reviews </button>
    </div>
  );
};

export default EachBook;
