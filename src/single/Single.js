import React, {Component} from "react";
import Head from "../home/components/head/Head";
import Foot from "../home/components/foot/Foot";
import {SingleWrap,SingleItem} from './singleStyle';
import axios from 'axios';

class Single extends Component{
    state = {
        singleList:[],
        flag:false,
    };
    componentDidMount() {
        console.log(this.props.match.params.id);
        axios.get('/data/homeList.json')
            .then((res)=>{
                console.log(res.data);
                this.setState({
                    singleList:res.data.data.topicList,
                    flag:true
                });
            })
    }

    render() {
        return(
            <div>
                <SingleWrap>
                    <Head/>
                    <SingleItem>
                        <div>
                            {this.state.flag ? <img src={this.state.singleList[this.props.match.params.id-1].picUrl} alt=""/> : ""}
                        </div>
                        {this.state.flag ?<h3>{this.state.singleList[this.props.match.params.id-1].title}</h3> : ""}
                        {this.state.flag ? <p>{this.state.singleList[this.props.match.params.id-1].desc}</p> : ""}
                    </SingleItem>
                    <Foot/>
                </SingleWrap>
            </div>
        )
    }
}

export default Single;


