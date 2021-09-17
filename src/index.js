import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login';
import { BrowserRouter } from 'react-router-dom';
import RegisterUser from './pages/RegisterUser';
import Routes from './Routes/routes';
import MeusPedidos from './pages/MeusPedidos';

ReactDOM.render(
  <React.StrictMode>
   {
    //<BrowserRouter>
  //<Routes></Routes>
  //<Routes/>
  //<MeusPedidos/>
  <App/>
    //</BrowserRouter>
  } 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
