import React, {Component} from 'react';
import {ListWrap,ListItem} from '../stageStyle'
import {connect} from 'react-redux';

class List extends Component {
    state = {
        picList:[]
    };
    render(){
        return(
            <div>
                <ListWrap>
                    {
                        this.props.picList.map((item,index)=>{
                            return(
                                <ListItem key={index}>
                                    <img src={item.picUrl} alt=""/>
                                    <span>{item.title}</span>
                                </ListItem>
                            )
                        })
                    }
                </ListWrap>
            </div>
        )
    }
}

// const mapState = (state) =>{
//     console.log(state);
//     return{}
// };

//  映射数据
const mapState = (state) =>({
    picList:state.home.picList
});

export default connect(mapState,null) (List);