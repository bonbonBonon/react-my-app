import {createStore} from "redux";         //  创建store,引入创建方法
import reducer from './reducer';

const store = createStore(reducer);            //  创建store,并且关联reducer

export default store;
