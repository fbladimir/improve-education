import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { AuthContextProvider } from "./context/AuthContext";
import './indexMain.css';
import './index.css'; 

//import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
