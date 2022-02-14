import EachBook from "./EachBook";

const Books = ({ books, addReview }) => {
  const bookList = books.map((book) => (
    <EachBook key={book.id} book={book} addReview={addReview} />
  ));

  return (
    <div>
      <h1>Here will be a list of books</h1>
      <br />
      {bookList}
    </div>
  );
};
export default Books;
