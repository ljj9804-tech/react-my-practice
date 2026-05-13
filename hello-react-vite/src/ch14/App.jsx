// import Ex1 from './ex/Ex1';
// import Ex2 from './ex/Ex2';
// import Ex3 from './ex/Ex3';
// import Ex4 from './ex/Ex4';
// import DummyJson from './dummyJson/DummyJson';
// import Jsonplaceholder from './jsonplaceholder/Jsonplaceholder';
// import NewsList from './newsApi/NewsList';
import { Route, Routes } from 'react-router-dom';
import NewsPage from './newsApi/NewsPage';

const App = () => {
  return (
    // <div>
    //   <h1>ch14 API Test</h1>

    //   <h2>dummyJson</h2>
    //   <DummyJson></DummyJson>

    //   <h2>Jsonplaceholder</h2>
    //   <Jsonplaceholder></Jsonplaceholder>

    //   <h2>NewsApiTest</h2>
    //   <NewsList category="all"></NewsList>

    //   {/* 실습 ────────────────────────────────────────────────────────── */}

    //   <h2>실습1</h2>
    //   <Ex1></Ex1>

    //   <h2>실습2</h2>
    //   <Ex2></Ex2>

    //   <h2>실습3</h2>
    //   <Ex3></Ex3>

    //   <h2>실습4</h2>
    //   <Ex4></Ex4>
    // </div>

    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
};

export default App;
