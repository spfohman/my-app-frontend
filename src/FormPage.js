import React, { useState } from "react";

const FormPage = () => {
  const [newBook, setNewBook] = useState({
    user: "",
    title: "",
    author: "",
    review: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewBook({ ...newBook, [name]: value });
  };
  return (
    <div>
      <form className="form">
        <h5>Add new users or books here: </h5>
        <input
          type="text"
          placeholder="User Name"
          name="user"
          value={newBook.user}
          onChange={handleChange}
        ></input>
        <br />
        <input
          type="text"
          placeholder="Book Title"
          name="title"
          value={newBook.title}
          onChange={handleChange}
        ></input>
        <br />
        <input
          type="text"
          placeholder="Author"
          name="author"
          value={newBook.author}
          onChange={handleChange}
        ></input>
        <br />
        <input
          type="text"
          placeholder="Review"
          name="review"
          value={newBook.review}
          onChange={handleChange}
        ></input>

        <br />
        <input className="button" type="submit" />
      </form>
    </div>
  );
};
export default FormPage;
