import { useState } from 'react';

const Ex2 = () => {
  //구조 분해 할당, 각각 이름과 나이로 State 분리
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  //onChange 함수
  const onNameChange = (e) => setName(e.target.value);
  const onAgeChange = (e) => setAge(e.target.value);

  const onConfirm = () => {
    alert(`입력된 이름: ${name}\n입력된 나이: ${age}세`);
    setName('');
    setAge('');
  };

  //return=========================================================
  return (
    <div>
      <label>이름 : </label>
      <input
        placeholder="이름을 입력합니다"
        value={name}
        onChange={onNameChange}
      />
      <br />
      <label>나이 : </label>
      <input
        placeholder="나이를 입력합니다"
        value={age}
        onChange={onAgeChange}
      />
      <p>현재 입력된 이름: {name}</p>
      <p>현재 입력된 나이: {age}</p>
      <button onClick={onConfirm}>확인</button>
    </div>
  );
};

export default Ex2;
