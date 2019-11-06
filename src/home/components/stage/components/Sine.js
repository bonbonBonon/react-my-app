import React, {Component} from 'react';
import {SineWrap,SineItem} from '../stageStyle'
import img1 from '../../../../static/wb1.jpg'
import img2 from '../../../../static/wb2.jpg'
import {connect} from 'react-redux';

class Sine extends Component {
    state = {
        ItemList:[]
    };
    render(){
        return(
            <div>
                <SineWrap>
                    <img src={img1} alt=""/>
                    <img src={img2} alt=""/>
                    {
                        this.props.ItemList.map((item,index)=>{
                            return(
                                <SineItem key={index}>
                                    <p>{item.title}</p>
                                </SineItem>
                            )
                        })
                    }
                </SineWrap>
            </div>
        )
    }
}

// const mapState = (state) => {
//     console.log(state);
//     return {};
// };

//  映射数据
const mapState = (state) =>({
    ItemList:state.home.ItemList,
});


export default connect(mapState,null) (Sine);