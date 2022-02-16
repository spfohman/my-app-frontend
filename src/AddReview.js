import React, { useState } from "react";

const AddReview = ({ addReview, book }) => {
  const [newReview, setNewReview] = useState({
    text: "",
    book_id: book.id,
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setNewReview({ ...newReview, [name]: value });
  };
  function handleSubmit(e) {
    const addNewReview = {
      text: newReview.text,
      book_id: newReview.book_id,
    };

    fetch(`http://localhost:9292/books/${book.id}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewReview),
    })
      .then((response) => response.json())
      .then(addReview);
    setNewReview({
      text: "",
      book_id: newReview.book_id,
    });
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h5>Add new review here: </h5>

        <textarea
          type="text"
          placeholder="Review"
          name="text"
          value={newReview.text}
          onChange={handleChange}
        ></textarea>

        <br />
        <input className="button" type="submit" />
      </form>
    </div>
  );
};
export default AddReview;
