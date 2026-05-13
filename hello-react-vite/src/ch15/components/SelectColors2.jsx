import { useContext } from 'react';
import ColorContext from '../contexts/ColorContext2';

//contexts/ColorContext.js에 fontSize 상태(기본값: '16px')를 추가하고,
// ColorBox에서 박스 안에 state.color 이름을 state.fontSize 크기로 표시하세요.
// SelectColors에는 폰트 크기를 변경하는 버튼(small/medium/large)도 추가하세요.

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColors2 = () => {
  const { actions } = useContext(ColorContext); // actions만 꺼내서 사용

  return (
    <div style={{ padding: '10px' }}>
      <h2>색상을 선택하세요.</h2>
      <div style={{ display: 'flex', gap: '4px' }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{
              background: color,
              width: '36px',
              height: '36px',
              cursor: 'pointer',
              borderRadius: '4px',
            }}
            onClick={() => actions.setColor(color)}
            onContextMenu={(e) => {
              e.preventDefault();
              actions.setSubcolor(color);
            }}
          />
        ))}
      </div>
      <hr />
      <div>
        <span>폰트 크기</span>
        {[
          ['small', '12px'],
          ['medium', '16px'],
          ['large', '24px'],
        ].map(([label, size]) => (
          <button key={label} onClick={() => actions.setFontSize(size)}>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectColors2;
