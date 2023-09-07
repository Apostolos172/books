import BookCard from "./BookCard";
import "./BooksList.css";

const BooksList = ({ children, onDelete, onEdit }) => {
  const renderedBooks = children.map((book) => {
    return <BookCard onDelete={onDelete} onEdit={onEdit} key={book.id}>{book}</BookCard>;
  });

  return <div className="books-container">{renderedBooks}</div>;
};

export default BooksList;
