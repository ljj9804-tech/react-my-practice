import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './ch14/App';
import App from './ch15/App';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
