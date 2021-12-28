import React, { useCallback, useState } from "react";
// https://react-icons.netlify.com/#/icons/md (icon 리스트)
import { MdAdd } from "react-icons/md"
import "./TodoInsert.scss";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState();

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, [setValue]);

  const onSubmit = useCallback(
    e => {

      // 콜백호출 todo 추가
      onInsert(value);
      setValue(''); // value 값 초기화

      // submit 새로고침 방지 함수
      e.preventDefault();
    },
    [onInsert, value],
  );


  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력해주세요"
        value={value}
        onChange={onChange} />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;