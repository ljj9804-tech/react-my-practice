import { createContext, useState } from 'react';

// 기본값: 타입 힌트 역할 (실제 값은 Provider가 공급)
const ColorContext2 = createContext({
  state: { color: 'black', subcolor: 'red', fontSize: '16px' },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
    setFontSize: () => {},
  },
});

// Provider를 감싼 커스텀 컴포넌트
// jsx 문법이 같이 사용중.
const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subcolor, setSubcolor] = useState('red');
  const [fontSize, setFontSize] = useState('16px');

  const value = {
    state: { color, subcolor, fontSize },
    actions: { setColor, setSubcolor, setFontSize },
  };

  return (
    <ColorContext2.Provider value={value}>{children}</ColorContext2.Provider>
  );
};

// Consumer를 별칭으로 export (사용 편의)
const { Consumer: ColorConsumer } = ColorContext2;

export { ColorProvider, ColorConsumer };
export default ColorContext2;
