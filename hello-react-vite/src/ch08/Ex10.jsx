import { useState, useRef, useEffect } from 'react';

const Ex10 = () => {
  const [count, setCount] = useState(0);

  // 1. 렌더링 횟수를 저장할 ref 생성 (초기값 1)
  // useRef에 저장된 값은 바뀌어도 화면이 다시 그려지지 않습니다.
  const renderCount = useRef(0);

  // 2. useEffect는 컴포넌트가 렌더링될 때마다 실행됩니다.
  useEffect(() => {
    // 렌더링이 완료될 때마다 ref의 값을 1씩 증가시킴
    renderCount.current = renderCount.current + 1;

    // 콘솔에 현재까지의 총 렌더링 횟수 출력
    console.log(`현재까지 렌더링 횟수: ${renderCount.current}`);
  });

  return (
    <div>
      <p>State 값: {count}</p>

      {/* 3. 버튼을 클릭하면 state가 바뀌며 리렌더링이 발생합니다. */}
      <button onClick={() => setCount((prev) => prev + 1)}>
        렌더링 발생시키기 (+1)
      </button>
    </div>
  );
};

export default Ex10;
