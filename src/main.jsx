import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { MealProvider } from './context/MealContex.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MealProvider>
      <App />
    </MealProvider>
  </React.StrictMode>
);
