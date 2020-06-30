import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import Todolist from './Todolist';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <Todolist />
  </Provider>
  ,document.getElementById('root'));