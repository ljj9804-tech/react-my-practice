// App.jsx
import Ex1 from '../ch09/Ex1';
import './App.css';
import Ex2 from './Ex2';

const App = () => (
  <div className="App">
    <header>
      <img className="logo" src="favicon.svg" alt="logo" />
      <p>Hello React!</p>
    </header>
    <h1> ch09 React 스타일링 예시</h1>

    <br />
    <Ex1></Ex1>

    <br />
    <Ex2></Ex2>
  </div>
);

export default App;
