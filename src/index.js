import 'core-js/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store'
import { Provider } from 'mobx-react';
import './index.scss';
import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.css'

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
