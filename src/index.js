import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/*import App from './App';*/
import reportWebVitals from './reportWebVitals';
// import Calculatrice from './calculater/Calculatrice';
import Forme from './Forme';
import FormeState from './FormeState';
import FormeTable from './FormeTable';
import Component from './Hooks/Compteur';
import Form from './Hooks/Form';
import Menu from './routage/Menu';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <Calculatrice/> */}
    {/* <Forme/>
    <FormeState/>
    <FormeTable/>
    <Compteur/> */}
    {/* <Form/> */}
    <Menu/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
