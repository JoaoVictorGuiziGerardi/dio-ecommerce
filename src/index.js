import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalCss from './assets/style/globalCss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalCss/>
    <App />
  </React.StrictMode>
);
