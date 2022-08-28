import React from 'react';
import ReactDOM from 'react-dom/client';
import StudentContainer from './components/StudentContainer'
import './App.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <StudentContainer />
  </React.StrictMode>
);

