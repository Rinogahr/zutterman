import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LayoutComponent from './components/layout-component/layout-component';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LayoutComponent/>
  </React.StrictMode>
);


reportWebVitals();
