import React, { useCallback, useState } from "react";
// https://react-icons.netlify.com/#/icons/md (icon 리스트)
import { MdAdd } from "react-icons/md"
import "./TodoInsert.scss";

const TodoInsert = () => {
  // 체크박스 추가 state
  const [value, setValue] = useState('');

  // 
  const onChage = useCallback(e => {
    console.log(e);
    setValue(e.setValue);
  }, []);

  return (
    <form className="TodoInsert">
      <input
        placeholder="할 일을 입력해주세요"
        value={value || ''}
        onChange={onChage}></input>
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;