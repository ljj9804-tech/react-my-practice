import { useState, useCallback, useEffect } from 'react';

const Ex8 = () => {
  const [count, setCount] = useState(0);

  // [기능 1] 1 증가 함수
  // useCallback(() => { ... }, [])
  // 의존성 배열이 비어있으므로, 컴포넌트가 처음 마운트될 때 딱 한 번만 함수를 생성하고 재사용합니다.
  const handleIncrease = useCallback(() => {
    console.log('handleIncrease 실행');
    // count + 1 대신 함수형 업데이트 (prev => prev + 1)를 사용해야
    // 항상 최신 상태를 반영하며 메모이제이션을 유지할 수 있습니다.
    setCount((prev) => prev + 1);
  }, []);

  // [기능 2] 1 감소 함수
  const handleDecrease = useCallback(() => {
    console.log('handleDecrease 실행');
    setCount((prev) => prev - 1);
  }, []);

  // [기능 3] 리셋 함수 (0으로 초기화)
  const handleReset = useCallback(() => {
    console.log('handleReset 실행');
    setCount(0);
  }, []);

  // 생성 확인을 위한 콘솔로그============================================
  useEffect(() => {
    console.log('handleIncrease 함수 생성됨');
  }, [handleIncrease]);

  useEffect(() => {
    console.log('handleDecrease 함수 생성됨');
  }, [handleDecrease]);

  useEffect(() => {
    console.log('handleReset 함수 생성됨');
  }, [handleReset]);
  //=====================================================================

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{count}</b>입니다.
      </p>

      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleDecrease}>-1</button>
      <button onClick={handleReset}>초기화</button>
    </div>
  );
};

export default Ex8;
