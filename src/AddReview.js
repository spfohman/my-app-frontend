import React, { useState } from "react";

const AddReview = ({ addReview }) => {
  const [newReview, setNewReview] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setNewReview({ ...newReview, [name]: value });
    console.log(newReview);
    console.log(newReview.book_id);
  };
  function handleSubmit(e) {
    e.preventDefault();
    console.log(newReview);
    const addNewReview = {
      text: newReview.review,
      book_id: newReview.book_id,
    };

    fetch(`http://localhost:9292/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewReview),
    })
      .then((response) => response.json())
      .then(addReview);
    setNewReview({
      review: "",
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
          name="review"
          value={newReview.review}
          onChange={handleChange}
        ></textarea>

        <br />
        <input className="button" type="submit" />
      </form>
    </div>
  );
};
export default AddReview;
