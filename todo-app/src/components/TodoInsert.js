import React from "react";
// https://react-icons.netlify.com/#/icons/md (icon 리스트)
import { MdAdd } from "react-icons/md"
import "./TodoInsert.scss";

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="할 일을 입력해주세요"></input>
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  )
};

export default TodoInsert;