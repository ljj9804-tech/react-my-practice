import { useState } from 'react';

const Say = () => {
  // useState 함수를 이용하면,
  // 결과로 2개를 반환하는데
  // 1) 빈문자열 초기값(message) 2) 세터함수를 반환(setMessage)
  const [message, setMessage] = useState('오늘 점심 뭐 먹죠?');
  const [color, setColor] = useState('black');

  // 이벤트 핸들러 추가.
  const onClickEnter = () => setMessage('안녕하세요, enter 이벤트 동작. ');
  const onClickLeave = () => setMessage('안녕하세요, leave 이벤트 동작. ');
  const onColorChangeRed = () => setColor('red');
  const onColorChangeGreen = () => setColor('green');
  const onColorChangeBlack = () => setColor('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={onColorChangeRed}>
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={onColorChangeGreen}>
        초록색
      </button>
      <button style={{ color: 'black' }} onClick={onColorChangeBlack}>
        검정색
      </button>
      {/* 초록색, 파란색, 검정색(돌아가기) */}
    </div>
  );
};

export default Say;
