import { useState } from "react";
import "./Input.css";
import { useContext } from "react";
import BooksContext from "../context/BooksContext";
import useBooksContext from "../hooks/useBooksContext";

const Input = ({}) => {
  const [text, setText] = useState("");
  const { onSubmit } = useBooksContext();
  const onChange = (e) => {
    let newInput = e.target.value;
    setText(newInput);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
    setText("");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Add book, giving the title</label>
        <input value={text} onChange={onChange}></input>
        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
};

export default Input;
