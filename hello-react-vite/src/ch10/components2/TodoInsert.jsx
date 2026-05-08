// src/components/TodoInsert.jsx
import { useState, useCallback } from 'react';
// import { MdAdd } from 'react-icons/md';
// import { AiFillEdit } from 'react-icons/ai';
import { MdNoteAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  // 입력창의 현재 값을 로컬 state로 관리
  const [value, setValue] = useState('');
  const [priority, setPriority] = useState('medium');

  // onChange: input이 바뀔 때마다 value 업데이트
  // 빈 배열 [] → 컴포넌트 마운트 시 1번만 함수 생성
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  // onPriorityChange: 우선순위가 바뀔 때마다 priority 업데이트
  const onPriorityChange = useCallback((e) => {
    setPriority(e.target.value);
  }, []);

  // onSubmit: 폼 제출 시 실행
  // onInsert와 value가 바뀔 때만 새 함수 생성
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault(); // 페이지 새로고침 방지
      onInsert(value, priority); // 부모에게 새 할 일 전달
      setValue(''); // 입력창 초기화
      setPriority('medium'); // 우선순위 초기화
    },
    [onInsert, value, priority],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <select
        value={priority}
        onChange={onPriorityChange}
        className="PrioritySelect"
      >
        <option value="high">높음</option>
        <option value="medium">보통</option>
        <option value="low">낮음</option>
      </select>

      <button type="submit">
        <MdNoteAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
