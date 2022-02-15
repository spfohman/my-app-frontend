import EachBook from "./EachBook";
import SearchBar from "./SearchBar";

const Books = ({ books, addReview, searchTerm, onSearch }) => {
  const bookList = books.map((book) => (
    <EachBook key={book.id} book={book} addReview={addReview} />
  ));

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearch={onSearch} />
      <h1>Here will be a list of books</h1>
      <br />
      {bookList}
    </div>
  );
};
export default Books;
