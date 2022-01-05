import React from "react";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
  const { list } = useSelector((state) => state.todoReducer.list);
  const handleClearList = () => {};

  return (
    <div>
      <div>
        {[].map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoList;
