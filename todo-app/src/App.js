import React, { useCallback, useReducer, useRef } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import Modal from "./components/Modal";
import img from "./img/modal/1667.jpg"

// 테스트용 todo 생성 
function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `오늘 할 일 ${i} 개`,
      checked: false,
    });
  }
  return array;
}

// Reducer 사용
// state와 행동(action)에 따른 객체반환 처리
function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':  // 추가
      // { type: 'INSERT', todo: { id: 1, text: 'todo', checked: false } }
      return todos.concat(action.todo)
    case 'REMOVE': // 제거
      // { type: 'REMOVE', id: 1 }
      return todos.filter(todo => todo.id !== action.id)
    case 'TOGGLE': // 토글
      // { type: 'REMOVE', id: 1 }
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
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

  // 랜더링 시만 함수로 데이터 생성
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  // 고유값 id
  // ref로 변수 생성 
  const nextId = useRef(2501);

  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    // useState 함수형 업데이트
    // 성능 최적화를 위해서 필수로 사용해야함
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1; //nextId 1씩 증가
  }, []);

  const onRemove = useCallback(id => {
    dispatch({ type: 'REMOVE', id});
  }, []);


  const onToggle = useCallback(id => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  return (
    <><div >
      {/* 팝업창 */}
      <Modal img={img}/>
    </div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate></>
  );
}

export default App;