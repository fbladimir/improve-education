import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { AuthContextProvider } from "./context/AuthContext";
import './index.css';
import { BrowserRouter } from 'react-router-dom';

//const root = ReactDOM.createRoot(document.getElementById('root'));
//second test 
ReactDOM.render((
  <BrowserRouter>
    <App /> 
  </BrowserRouter>  
  ), document.getElementById('root')
);

