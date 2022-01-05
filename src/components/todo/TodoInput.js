import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/todoAction";
const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add Todo"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button className="add-button" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
};

export default TodoInput;
