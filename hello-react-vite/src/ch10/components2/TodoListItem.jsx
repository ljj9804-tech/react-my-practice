// src/components/TodoListItem.jsx
import {
  MdCheckBoxOutlineBlank, // 미체크 아이콘 □
  MdCheckBox, // 체크 아이콘 ☑
  MdRemoveCircleOutline, // 삭제 아이콘 ⊖
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked, priority } = todo; // 구조 분해 할당

  const priorityColors = {
    high: '#ff6b6b',
    medium: '#fcc419',
    low: '#51cf66',
  };

  return (
    <div className="TodoListItem">
      {/* 체크박스 영역: 클릭 시 토글 */}
      <div
        className={cn('checkbox', { checked })} // checked 속성
        onClick={() => onToggle(id)}
      >
        {todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
        <div className="priority" style={{ color: priorityColors[priority] }}>
          {priority}
        </div>
      </div>

      {/* 삭제 버튼: 클릭 시 삭제 */}
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
