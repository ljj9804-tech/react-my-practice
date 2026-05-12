import Ex1 from './ex/Ex1';
import Ex2 from './ex/Ex2';
import DummyJson from './dummyJson/DummyJson';
import Jsonplaceholder from './jsonplaceholder/Jsonplaceholder';
import NewsList from './newsApi/NewsList';

const App = () => {
  return (
    <div>
      <h1>ch14 API Test</h1>

      <h2>dummyJson</h2>
      <DummyJson></DummyJson>

      <h2>Jsonplaceholder</h2>
      <Jsonplaceholder></Jsonplaceholder>

      <h2>NewsApiTest</h2>
      <NewsList></NewsList>

      {/* 실습 ────────────────────────────────────────────────────────── */}

      <h2>실습1</h2>
      <Ex1></Ex1>

      <h2>실습2</h2>
      <Ex2></Ex2>
    </div>
  );
};

export default App;
