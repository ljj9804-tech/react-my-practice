import { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('렌더링이 완료되었습니다!');
    console.log({ name });

    return () => {
      // 컴포넌트가 언마운트되거나, 다음 effect 실행 전에 호출됩니다
      console.log('cleanup 실행');
    };
  }, [name]); // name 이 바뀔 때마다 실행

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름 입력"
      />
      <p>현재 이름: {name}</p>
    </div>
  );
};

export default Info;
