// src/components/TodoTemplate.jsx
import './TodoTemplate.scss';

const TodoTemplate = ({ children, total, completed, priority }) => (
  <div className="TodoTemplate">
    <div className="app-title">일정 관리</div>
    <div
      className="checkedCount"
      style={{ textAlign: 'start', padding: '5px', color: '#adb5bd' }}
    >
      완료 {completed} / 전체 {total}
    </div>

    <p>
      <div className="content">{children}</div>
      <div className="priority">{priority}</div>
    </p>
  </div>
);

export default TodoTemplate;
