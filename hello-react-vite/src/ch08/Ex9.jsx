import { useState, useRef } from 'react';

const Ex9 = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState('');

  // 1. input 엘리먼트에 직접 접근하기 위해 ref 객체 생성
  const inputEl = useRef(null);

  const onClickConfirm = () => {
    alert(`입력하신 내용: ${text}`);
    setList(list.concat(text));
    setText('');

    // 3. useRef를 사용하여 input 엘리먼트에 다시 포커스 주기
    // inputRef.current는 실제 DOM 노드를 가리킵니다.
    inputEl.current?.focus();
  };

  return (
    <div>
      <input
        // 4. 생성한 ref를 input 엘리먼트와 연결
        ref={inputEl}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="내용을 입력하세요"
      />

      <button onClick={onClickConfirm}>추가</button>

      <ul>
        {list.map((val, i) => (
          <li key={i}>{val}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ex9;
