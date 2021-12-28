import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App.js';
import {BrowserRouter} from "react-router-dom";



// const cDate = new Date();

ReactDOM.render(
  <>
  <BrowserRouter>
    <App /> 
  </BrowserRouter>

  </>,
  document.getElementById('root')
);


reportWebVitals();
