import BookCard from "./BookCard";
import "./BooksList.css";

const BooksList = ({ children }) => {
  const renderedBooks = children.map((book) => {
    return <BookCard key={book.id}>{book}</BookCard>;
  });

  return <div className="books-container">{renderedBooks}</div>;
};

export default BooksList;
