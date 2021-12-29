import React, { useCallback } from "react";
import { List } from "react-virtualized";
import TodoListItem from "./TodoListItem";
import './TodoList.scss';

// todos 받아오기 (APP.js)
const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );

  return (
    <List
      className="TodoList"
      width={512} // 전체 길이
      height={513} // 전체 높이
      rowCount={todos.length} // 항목 개수
      rowHeight={57} // 아이템 높이
      rowRenderer={rowRenderer} // 아이템을 랜더링 할 때 사용 함수
      list={todos} // 배열 형식
      style={{ outline: 'none' }} // List에 기본 적용되는 스타일 제거
    />
  );
};

export default React.memo(TodoList)