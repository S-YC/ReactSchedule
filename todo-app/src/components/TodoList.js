import React from "react";
import TodoListItem from "./TodoListItem";
import './TodoList.scss';

// todos 받아오기 (APP.js)
const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        //key : 배열 id
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList