import React from 'react';
import ReactDOM from 'react-dom';
import { IdentityContextProvider } from 'react-netlify-identity';
import 'semantic-ui-css/semantic.min.css'


import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <IdentityContextProvider url="https://git-reaper.frederikcreemers.be">
    <App />
    </IdentityContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
