import { useState, useMemo } from 'react';

const MaxValueCounter = () => {
  const [list, setList] = useState([]); // 숫자들을 저장할 배열
  const [number, setNumber] = useState(''); // 현재 입력 중인 텍스트

  // [기능] 버튼 클릭 시 입력된 숫자를 리스트에 추가
  const onInsert = () => {
    const parsed = parseInt(number, 10);
    if (isNaN(parsed)) return; // 숫자가 아니면 무시
    setList(list.concat(parsed)); // 새로운 배열을 만들어 상태 업데이트
    setNumber(''); // 입력창 비우기
  };

  // [핵심] useMemo를 사용한 최댓값 계산 최적화
  const max = useMemo(() => {
    // 숫자를 추가할 때(list가 변할 때)만 콘솔이 찍히는 것을 확인해 보세요!
    console.log('최댓값 계산 중...');
    if (list.length === 0) return 0;
    return Math.max(...list); // 배열의 요소들 중 가장 큰 값 반환
  }, [list]); // 의존성 배열: 오직 list가 변경될 때만 함수를 재실행함

  return (
    <div style={{ padding: '20px' }}>
      <h2>최댓값 구하기 (useMemo 실습)</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="숫자 입력"
      />
      <button onClick={onInsert}>추가</button>

      <div style={{ marginTop: '20px' }}>
        <strong>입력된 목록:</strong> {list.join(', ')}
      </div>

      <div style={{ marginTop: '10px', color: 'blue', fontSize: '1.2rem' }}>
        <strong>최댓값: {max}</strong>
      </div>

      <p style={{ color: '#666', fontSize: '0.9rem' }}>
        * 팁: 숫자를 입력창에 타이핑할 때는 '최댓값 계산 중...' 로그가 찍히지
        않습니다. <br />* 오직 '추가' 버튼을 눌러 리스트가 바뀔 때만 계산이
        이루어집니다.
      </p>
    </div>
  );
};

export default MaxValueCounter;
