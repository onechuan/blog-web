import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'
import 'antd/dist/antd.css';
import "@/assets/css/reset.css";


import App from './App';

const container = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

