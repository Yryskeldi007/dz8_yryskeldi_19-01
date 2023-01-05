import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contacts from './Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Contacts/>
  </React.StrictMode>
);
