import React, {Component} from 'react';
import {TopicWrap,TopicItem} from '../stageStyle'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Topic extends Component {
    state = {
        topicList:[]
    };
    render(){
        return(
            <div>
                <TopicWrap>
                    {
                        this.props.topicList.map((item,index)=>{
                            return(
                                <Link to={`/single/${index+1}`}>
                                    <TopicItem key={index}>
                                        <img src={item.picUrl} alt=""/>
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>{item.desc}</p>
                                        </div>
                                    </TopicItem>
                                </Link>
                            )
                        })
                    }
                </TopicWrap>
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
    topicList:state.home.topicList
});


export default connect(mapState,null) (Topic);