import { useState, useEffect } from 'react';

const Ex4 = () => {
  const [seconds, setSeconds] = useState(0);

  const ONE_SECOND = 1000; //1초 정의

  useEffect(() => {
    // 1. 컴포넌트가 화면에 나타날 때 타이머 시작
    console.log('타이머 시작.');
    const interval = setInterval(() => {
      // 2. 1초마다 prev(최신값)을 받아 1을 더해줌
      setSeconds((prev) => prev + 1);
    }, ONE_SECOND);

    // 3. cleanup 함수: 컴포넌트가 사라질 때 실행됨
    return () => {
      clearInterval(interval);
      console.log('타이머가 정리되었습니다.');
    };
  }, []); // 의존성 배열을 비워두면 처음 한 번만 실행됨

  return (
    <div>
      <p>타이머 : {seconds}초</p>
    </div>
  );
};

export default Ex4;
