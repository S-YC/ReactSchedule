import React, { useState } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  // 체크박스 배열 stata 생성  
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리엑트 기초 알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링 알아보기",
      checked: true,
    },
    {
      id: 3,
      text: "일정 관리 앱 만들기",
      checked: false,
    },
  ])


  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;