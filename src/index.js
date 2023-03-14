import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

//const root = ReactDOM.createRoot(document.getElementById('root'));
//this is just a test to see if it works 
ReactDOM.render((
  <BrowserRouter>
    <App /> 
  </BrowserRouter>  
  ), document.getElementById('root')
);

