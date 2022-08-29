import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Authen_context from './Context/Authen_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Authen_context>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Authen_context>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
