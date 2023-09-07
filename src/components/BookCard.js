import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import EditBook from "./EditBook";
import "./BookCard.css";
import { useState } from "react";

const BookCard = ({ children, onDelete, onEdit }) => {
  const [editMode, setEditMode] = useState(false);
  const deleteHandle = () => {
    onDelete(children.id);
  };
  const editHandle = () => {
    setEditMode((currentEditMode) => {
      return !currentEditMode;
    });
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
      {editMode ? (
        <EditBook editBook={onEdit} editModeF={setEditMode}>
          {children}
        </EditBook>
      ) : (
        <h3>{children.title}</h3>
      )}
      <div className="edit-delete-container">
        <AiFillEdit onClick={editHandle}></AiFillEdit>
        <AiFillDelete onClick={deleteHandle}></AiFillDelete>
      </div>
    </div>
  );
};

export default BookCard;
