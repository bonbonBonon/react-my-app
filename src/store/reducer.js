//  当有很多组件要使用reducer公有数据时，应该把主的reducer进行拆分，
//  把处理数据的内容让各个组件分的reducer去承担，主reducer只承担引入分reducer的作用，
//  最后通过store把数据映射到所以组件中


import {combineReducers} from 'redux';        //  负责拆分reducer
import headReducer from "../home/components/head/store/headReducer";
import homeReducer from "../home/components/stage/store/homeReducer";

export default combineReducers({
    head:headReducer,       //  key 值自己取的名字
    home:homeReducer
})



