import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import './index.css';
// import Todolist from './tradition/Todolist';
import { store } from './store';
import App from "./App";

// ReactDOM.render(
//   <Provider store={store}>
//     <Todolist />
//   </Provider>
//   ,document.getElementById('root'));

  
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>
  ,document.getElementById('root'));