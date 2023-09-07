import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import "./BookCard.css";

const BookCard = ({ children, onDelete }) => {
  const deleteHandle = () => {
    onDelete(children.id);
  };
  return (
    <div className="book-card-container">
      <div>
        <img
          alt={children.title}
        //   src={`https://picsum.photos/seed/${Math.random()}/200/300`}
          src={`https://picsum.photos/seed/${children.id}/200/300`}
        ></img>
      </div>
      <h3>{children.title}</h3>
      <div className="edit-delete-container">
        <AiFillEdit></AiFillEdit>
        <AiFillDelete onClick={deleteHandle}></AiFillDelete>
      </div>
    </div>
  );
};

export default BookCard;
