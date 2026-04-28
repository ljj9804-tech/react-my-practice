import { useState } from 'react';
import Counter from '../ch08/Counter';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Ex3 from './Ex3';
import Ex4 from './Ex4';
import Counter2 from './Counter2';
import Ex5 from './Ex5';
import Ex6 from './Ex6';
import Average from './Average';
// import Info from './Info'; // 잠시 주석처리

const App = () => {
  //Ex4 언마운트 효과 확인을 위한 상태 추가
  const [isShowing, setIsShowing] = useState(0);

  return (
    <div>
      <h1>ch08 hooks 특수 함수 알아보기</h1>
      <h2>useState 기본 예시 연습</h2>
      <Counter></Counter>
      <br />
      <h3>실습 1번</h3>
      <Ex1></Ex1>
      <br />
      <h3>실습 2번</h3>
      <Ex2></Ex2>
      <br />
      <h2>useEffect 기본 예시 연습</h2>
      <h5>잠시 주석처리</h5>
      {/* <Info></Info> */}
      <br />
      <h3>실습 3번</h3>
      <Ex3></Ex3>
      <br />
      <h3>실습 4번</h3>
      <button onClick={() => setIsShowing(!isShowing)}>
        {isShowing ? '타이머 컴포넌트 숨기기' : '타이머 컴포넌트 숨기기 취소'}
      </button>
      <hr />
      {isShowing && <Ex4 />}
      <br />
      <h2>useReducer 기본 예시 연습</h2>
      <Counter2></Counter2>
      <br />
      <h3>실습 5번</h3>
      <Ex5></Ex5>
      <h3>실습 6번</h3>
      <Ex6></Ex6>
      <h2>useMemo 기본 예시 연습</h2>
      <Average></Average>
      <br />
    </div>
  );
};

export default App;
