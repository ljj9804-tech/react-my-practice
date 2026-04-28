// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './ch08/App';
// import App from './practice01/App'

createRoot(document.getElementById('root')).render(
  //ch07 작업을 위해 잠시 주석처리(<StrictMode></StrictMode> 부분)
  // <StrictMode>
  //   <App />
  // </StrictMode>,

  <App />,
);
