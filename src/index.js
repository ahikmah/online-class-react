import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './pages/App.js';
import Login from './pages/Login.js'
import ResetPassword from './pages/ResetPassword.js'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Login />
    {/* <ResetPassword /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
