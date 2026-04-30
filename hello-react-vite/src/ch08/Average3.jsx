import { useState, useRef } from 'react';

const Average3 = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  // 1. useRef를 사용하여 'inputEl'이라는 Ref 객체 생성
  // 이 객체는 .current 속성에 실제 DOM 엘리먼트를 담게 됩니다.
  const inputEl = useRef(null);

  const onInsert = () => {
    const parsed = parseInt(number, 10);

    // 숫자가 아닌 값이 입력되었을 때의 처리
    if (isNaN(parsed)) {
      // 2. inputEl.current를 통해 실제 input 엘리먼트에 접근하여 포커스를 줍니다.
      // '?'는 옵셔널 체이닝으로, inputEl.current가 존재할 때만 focus()를 실행합니다.
      inputEl.current?.focus();
      return;
    }

    // 함수형 업데이트를 사용하여 안전하게 리스트 추가
    setList((prevList) => prevList.concat(parsed));
    setNumber('');

    // 3. 숫자를 추가한 뒤에도 다시 입력하기 편하도록 포커스를 이동시킵니다.
    inputEl.current?.focus();
  };

  return (
    <div>
      {/* 4. ref 속성에 위에서 만든 inputEl을 연결합니다. 
          이제 리액트가 렌더링될 때 실제 input DOM이 inputEl.current에 저장됩니다. */}
      <input
        ref={inputEl}
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="숫자 입력"
      />

      <button onClick={onInsert}>추가</button>

      <ul>
        {list.map((val, i) => (
          <li key={i}>{val}</li>
        ))}
      </ul>
    </div>
  );
};

export default Average3;
