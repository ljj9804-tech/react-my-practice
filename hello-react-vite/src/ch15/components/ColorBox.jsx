import ColorContext from '../contexts/ColorContext';

//ColorBox 컴포넌트를 수정해서 색상 이름 텍스트도 함께 표시하세요
const ColorBox = () => (
  //Consumer는 getter느낌
  <ColorContext.Consumer>
    {(value) => (
      <div style={{ display: 'inline-block', textAlign: 'center' }}>
        <div
          style={{
            width: '64px',
            height: '64px',
            background: value.color,
            border: '1px solid #333',
            marginBottom: '4px',
          }}
        ></div>
        <p style={{ fontSize: '20px', fontWeight: '500', color: value.color }}>
          현재 색상: {value.color}
        </p>
      </div>
    )}
  </ColorContext.Consumer>
);

export default ColorBox;
