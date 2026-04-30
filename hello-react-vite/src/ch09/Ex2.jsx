import './App.css';

const Ex2 = () => {
  return (
    <div className="ex2-card">
      <h2 className="ex2-card__title">문제 1-2 실습</h2>
      <p className="ex2-card__content">
        아래 버튼에 마우스를 올리거나 클릭해 보세요.
      </p>

      {/* 버튼에 BEM 클래스 적용 */}
      <button className="ex2-card__button">눌러보세요!</button>
    </div>
  );
};

export default Ex2;
