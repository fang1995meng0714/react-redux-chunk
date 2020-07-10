import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import './index.css';
import { store } from './store';
import DefaultLogin from "./DefaultLogin";


import 'antd/dist/antd.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <DefaultLogin />
    </Router>
  </Provider>
  ,document.getElementById('root'));