//   储存和处理公共数据
//   reducer 是纯函数。它仅仅用于计算下一个 state。
const defaultState = {
    topicList:[],
    picList:[],
    ItemList:[],
    List:[],
};


//  Action 是把数据传入 store 的惟一途径
export default (state = defaultState,action)=>{
    console.log(action);
    if(action.type === "init_home_data"){
        const newState = JSON.parse(JSON.stringify(state));
        newState.topicList = action.data.topicList;
        newState.picList = action.data.picList;
        newState.ItemList = action.data.ItemList;
        newState.List = action.data.List;
        return newState
    }
    return state;
};