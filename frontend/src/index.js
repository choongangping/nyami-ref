import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'; // 전역 초기화 css
import './global.css'; // 커스텀 전역 초기화 css
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
