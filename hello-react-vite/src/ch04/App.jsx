import EventPractice from './EventPractice';
import EventPractice2 from './EventPractice2';
import EventPractice3 from './EventPractice3';

// 부모 컴포넌트
const App = () => {
  return (
    <div>
      <h1>ch4-이벤트 핸들링</h1>
      {/* 자식 컴포넌트 : EventPractice , 그려주기 */}
      <h2>연습1</h2>
      <EventPractice></EventPractice>
      <h2>연습2</h2>
      <EventPractice2></EventPractice2>
      <h2>연습3</h2>
      <EventPractice3></EventPractice3>
    </div>
  );
};

export default App;
