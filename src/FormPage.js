import React, { useState } from "react";

const FormPage = ({ addBooks }) => {
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    likes: 0,
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewBook({ ...newBook, [name]: value });
  };
  function handleSubmit(e) {
    e.preventDefault();
    const addNewBook = {
      title: newBook.title,
      author: newBook.author,
      likes: 0,
    };

    fetch(`http://localhost:9292/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewBook),
    })
      .then((response) => response.json())
      .then(addBooks);
    setNewBook({
      title: "",
      author: "",
      likes: 0,
    });
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h5>Add new books here: </h5>

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

        <input className="button" type="submit" />
      </form>
      <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGJvb2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></img>
    </div>
  );
};
export default FormPage;
