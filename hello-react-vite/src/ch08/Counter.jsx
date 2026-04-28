import { useState } from 'react';

const Counter = () => {
  //구조 분해 할당
  // useState: 기본값 지정
  // set..: 기본값을 변경하는 함수
  const [value, setValue] = useState(0);
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>입니다.
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>

      {/* 신규 버튼 추가 */}
      <button onClick={() => setValue(value + 2)}>+2</button>
      <button onClick={() => setValue(0)}>초기화</button>
    </div>
  );
};

export default Counter;
