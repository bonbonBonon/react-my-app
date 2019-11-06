import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style';
import './static/bootstrap/css/bootstrap.css'
import store from "./store/store";
import {Provider} from 'react-redux';
import "antd/dist/antd.css";


//   <Provider store> 使组件层级中的 connect() 方法都能够获得 Redux store。
//   正常情况下，你的根组件应该嵌套在 <Provider> 中才能使用 connect() 方法。
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);


