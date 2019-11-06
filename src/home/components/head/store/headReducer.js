//   储存和处理公共数据
//   reducer 是纯函数。它仅仅用于计算下一个 state。
const defaultState = {
    flag:false
};


//  Action 是把数据传入 store 的惟一途径
export default (state = defaultState,action)=>{
    console.log(action);
    const newState = JSON.parse(JSON.stringify(state));
    if(action.type === 'input_focus'){
        // const newState = JSON.parse(JSON.stringify(state));
        newState.flag = true;
        return newState;
    }else if(action.type === 'input_blur'){
        // const newState = JSON.parse(JSON.stringify(state));
        newState.flag = false;
        return newState;
    }
    return state;
};

// export default (state = defaultState,action)=>{
//     //  可以把if语句修改成switch
//     const newState = JSON.parse(JSON.stringify(state));
//     switch (action.type) {
//         case "input_focus" : newState.flag = true;
//             return newState;
//         case 'input_blur' : newState.flag = false;
//             return newState;
//         default : return state;
//     }
// }