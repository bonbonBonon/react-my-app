import React , {Component} from "react";
import {NotFoundWrap} from './NotFoundStyle';
import oImg from '../static/9.jpg';

class NotFound extends Component{
    render() {
        return(
            <div>
                <NotFoundWrap>
                    <img src={oImg} alt=""/>
                </NotFoundWrap>
            </div>
        )
    }
}

export default NotFound;