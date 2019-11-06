import React, {Component} from 'react';
import {ScanWrap,ScanItem} from '../stageStyle';
import {connect} from 'react-redux';

class Scan extends Component {
    state = {
        List:[]
    };
    render(){
        return(
            <div>
                <ScanWrap>
                    {
                        this.props.List.map((item,index)=>{
                            return(
                                <ScanItem key={index}>
                                    <img src={item.picUrl} alt=""/>
                                    <span>{item.desc}</span>
                                </ScanItem>
                            )
                        })
                    }
                </ScanWrap>
            </div>
        )
    }
}

// const mapState = (state) => {
//     console.log(state);
//     return {};
// };

const mapState = (state) =>({
    List:state.home.List
});

export default connect(mapState,null) (Scan);