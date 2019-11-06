import React, {Component} from 'react';
import {StageWrap,StageLeft,StageRight,} from './stageStyle'
// import oImg from '../../static/banner.png'
import List from "./components/List";
import Scan from "./components/Scan";
import Sine from "./components/Sine";
import Topic from "./components/Topic";
import axios from 'axios';
import {connect} from 'react-redux';

class Stage extends Component {
    render(){
        return(
            <div>
                <StageWrap className="clearfix">
                    <StageLeft>
                        <img src='//asset.ibanquan.com/s/30611/727/index_slide_2?v=1568268246_1572510848' alt=""/>
                        <List/>
                        <Topic/>
                    </StageLeft>
                    <StageRight>
                        <Scan/>
                        <Sine/>
                    </StageRight>
                </StageWrap>
            </div>
        )
    }

    componentDidMount() {
        axios.get("/data/homeList.json")
         .then((res)=>{
             // console.log(res.data);
             const data = res.data.data;
             console.log(data);
             const action = {
                 type:'init_home_data',
                 data
             };
             this.props.changeHomeData(action);
         })
    }
}

const mapDispatch = (dispatch) =>({
    changeHomeData(action){
        dispatch(action);
    }
});


export default connect(null,mapDispatch) (Stage);