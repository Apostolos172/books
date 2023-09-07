import { useState } from "react";
import "./EditBook.css";

const EditBook = ({ children, editBook, editModeF }) => {
  const [text, setText] = useState(children.title);
  const onChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    // console.log(children.id, { ...children, title: text });
    e.preventDefault(); // sos
    editBook(children.id, { ...children, title: text });
    editModeF(false);
  };

  return (
    <div className="edit-book-form-container">
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={text} onChange={onChange}></input>
        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
};

export default EditBook;