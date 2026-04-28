import { useEffect } from 'react';

const Ex3 = () => {
  useEffect(() => {
    console.log('실습3 컴포넌트가 화면에 나타났습니다!');

    //클린업 함수는 주석처리(해당 실습에 필요없음)
    // return () => {
    //   console.log('cleanup 실행');
    // };
  }, []); // 빈배열 입력 시 한번만 실행

  return (
    <div>
      <h3>콘솔 확인</h3>
    </div>
  );
};

export default Ex3;
