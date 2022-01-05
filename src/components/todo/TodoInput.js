import React from "react";

const TodoInput = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input className="todo-input" type="text" placeholder="Add Todo" />
      <button className="add-button" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
};

export default TodoInput;
