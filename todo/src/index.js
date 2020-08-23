import React from 'react';
import ReactDOM from 'react-dom';
// For now we dont need that (assume index.css is deleted)
// import './index.css';
import App from './App';

// This is for PWAs and offline content
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
