import BookCard from "./BookCard";
import "./BooksList.css";

const BooksList = ({ children, onDelete }) => {
  const renderedBooks = children.map((book) => {
    return <BookCard onDelete={onDelete} key={book.id}>{book}</BookCard>;
  });

  return <div className="books-container">{renderedBooks}</div>;
};

export default BooksList;
