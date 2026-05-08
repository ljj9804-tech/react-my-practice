// src/components/TodoList.jsx
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  if (!todos || todos.length === 0) {
    return (
      <div className="TodoList">
        <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>
          할 일이 없습니다🎉
        </h2>
      </div>
    );
  }
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        // 2. 개별 todo 아이템 렌더링
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
