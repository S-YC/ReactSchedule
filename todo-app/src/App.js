import React, { useCallback, useRef, useState } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import Modal from "./components/Modal";
import img from "./img/modal/1667.jpg"

// 테스트용 todo 생성 
function createTestTodos() {
  const array = [];
  for (let i = 1; i <= 5; i++) {
    array.push({
      id: i,
      text: `오늘 할 일 ${i} 개`,
      checked: false,
    });
  }
  return array;
}

const App = () => {
  // 체크박스 배열 stata 생성  
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: "리엑트 기초 알아보기",
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     text: "컴포넌트 스타일링 알아보기",
  //     checked: true,
  //   },
  //   {
  //     id: 3,
  //     text: "일정 관리 앱 만들기",
  //     checked: false,
  //   },
  // ])

  const [todos, setTodos] = useState(createTestTodos)

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  )

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  // 고유값 id
  // ref로 변수 생성 
  const nextId = useRef(2501);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; //nextId 1씩 증가
    },
    [todos],
  );


  return (
    <><div >
      <Modal img={img}/>
    </div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate></>
  );
}

export default App;