import React from "react";
import TodoListItem from "./TodoListItem";
import './TodoList.scss';

// todos 받아오기 (APP.js)
const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        //key : 배열 id
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TodoList