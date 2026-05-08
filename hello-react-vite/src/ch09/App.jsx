// App.jsx
import './App.css';
import CSSModule from './CSSModule';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Ex3 from './Ex3';
import Ex4 from './Ex4';
import Ex5 from './Ex5';
import Ex6 from './Ex6';
import Ex7 from './Ex7';
import Ex8 from './Ex8';
import Ex9 from './Ex9';
import ModuleCss from './ModuleCss';
import SassComponent from './SassComponent';
import SassEx1 from './SassEx1';
import StyledComponent from './StyledComponent';

const App = () => (
  <div className="App">
    <header>
      <img className="logo" src="favicon.svg" alt="logo" />
      <p>Hello React!</p>
    </header>
    <h1> ch09 React 스타일링 예시</h1>
    <h2>실습1</h2>
    <p>
      문제1 아래 조건을 만족하는 카드 컴포넌트를 일반 CSS로 만들어 보세요. -
      흰색 배경, 둥근 모서리(border-radius: 12px), 그림자 효과 - 제목(h2)은
      파란색 - 내용(p)은 회색 - BEM 네이밍 규칙 사용 Ex1.jsx 에 만들었던 css
      적용해보기.
    </p>
    <Ex1
      title="안녕하세요. 좋은 아침입니다~"
      content="1교시, 컴포넌트 스타일링 실습 중입니다."
    ></Ex1>

    <h2>실습2</h2>
    <p>
      문제 1-2 : 버튼에 :hover와 :active 선택자를 활용하여 마우스를 올렸을 때
      배경색이 바뀌고, 클릭 시 살짝 눌리는 효과(transform: scale)를 주세요
      Ex2.jsx 에 만들었던 css 적용해보기.
    </p>
    <Ex2>점심메뉴</Ex2>

    <h2>Sass 예제1</h2>
    <p>버튼에 색상, 크기, 모서리 설정 부분 변수로 이용해서 사용해보기.</p>
    <SassEx1></SassEx1>

    <h2>Sass 예제2</h2>
    <p>공통 util.scss 에서 만든 내용을 SassComponent.scss 활용 연습 확인.</p>
    <SassComponent></SassComponent>

    <h2>실습3</h2>
    <p>
      **문제 2-1** : Sass 변수와 믹스인을 활용하여 크기가 3가지인 버튼
      컴포넌트를 만드세요. - `$primary`, `$danger` 색상 변수 정의 - `@mixin
      button-size($padding, $font-size)` 믹스인 정의 - `.btn-sm`, `.btn-md`,
      `.btn-lg` 클래스로 크기 구분
    </p>
    <div style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
      <Ex3 size="sm">sm 버튼</Ex3>
      <Ex3 size="md">md 버튼</Ex3>
      <Ex3 size="lg">lg 버튼</Ex3>
      <Ex3 size="md" variant="danger">
        danger 버튼
      </Ex3>

      <br />
    </div>
    <h2>실습4</h2>
    <p>
      문제 2-2 : Sass 중첩(&)을 활용하여 네비게이션 바를 만드세요. 활성화된 메뉴
      항목(.active)은 밑줄이 표시되고, :hover 시 색이 변해야 합니다.
    </p>
    <Ex4></Ex4>

    <h2>CSSModule.css 예제</h2>
    <p>CSSModule 를 이용한 자동 클래스명 생성 예시</p>
    <ModuleCss></ModuleCss>
    <br />

    <h2>classnames 예제</h2>
    <p>classnames를 이용</p>
    <CSSModule></CSSModule>
    <h3>inverted 옵션 추가</h3>
    <CSSModule inverted={true}></CSSModule>
    <br />

    <h2>실습5</h2>
    <Ex5 type="success">성공</Ex5>
    <Ex5 type="warning">경고</Ex5>
    <Ex5 type="error">오류</Ex5>
    <br />
    <h2>실습6</h2>
    <Ex6></Ex6>
    <br />

    <h2>StyledComponent 예제</h2>
    <StyledComponent></StyledComponent>
    <br />

    <h2>실습7</h2>
    <p>
      문제 4-1 : styled-components로 Input 컴포넌트를 만드세요. error prop이
      true일 때 테두리가 빨간색으로 바뀌어야 합니다.
    </p>
    <Ex7 placeholder="이름을 입력하세요"></Ex7>
    <Ex7
      placeholder="이메일을 입력하세요"
      error
      errorMessage="올바른 형식이 아닙니다."
    ></Ex7>

    <h2>실습8</h2>
    <p>
      문제 4-2 : styled-components를 사용하여 Card 컴포넌트를 만드세요. variant
      prop으로 'primary'와 'secondary' 두 가지 스타일을 지원해야 합니다.
    </p>
    <Ex8
      variant="primary"
      title="기본 카드"
      content="파란색 계열 테마 카드"
    ></Ex8>
    <Ex8
      variant="secondary"
      title="보조 카드"
      content="보라색 계열 테마 카드"
    ></Ex8>

    <br />

    <h2>실습9</h2>
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        padding: '2rem',
        flexWrap: 'wrap',
      }}
    >
      <Ex9 name="기계식 키보드" price="119,000" isDiscounted={true} />
      <Ex9 name="기계식 키보드" price="142,000" isDiscounted={false} />
      <Ex9 name="무선 이어폰" price="100,000" isDiscounted={true} />
      <Ex9 name="스마트워치" price="130,000" isDiscounted={true} />
      <Ex9 name="기계식 키보드" price="119,000" isDiscounted={true} />
      <Ex9 name="기계식 키보드" price="142,000" isDiscounted={false} />
      <Ex9 name="기계식 키보드" price="142,000" isDiscounted={false} />
      <Ex9 name="무선 이어폰" price="100,000" isDiscounted={true} />
      <Ex9 name="스마트워치" price="130,000" isDiscounted={true} />
    </div>
    <div>
      {/* 공백 */}
      <br />
    </div>
  </div>
);

export default App;
