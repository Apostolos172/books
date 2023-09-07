import { useState } from "react";
import "./Input.css";

const Input = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    let newInput = e.target.value;
    setText(newInput);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
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
