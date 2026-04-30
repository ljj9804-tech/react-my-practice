import './App.css'; // 저장한 CSS 파일명을 불러옵니다.

const Ex1 = () => {
  return (
    <div className="Ex1-card">
      <h2 className="Ex1-card__title">카드 제목</h2>
      <p className="Ex1-card__content">
        이곳은 카드의 내용이 들어가는 부분입니다. BEM 규칙을 사용하여 스타일을
        적용했습니다.
      </p>
    </div>
  );
};

export default Ex1;
