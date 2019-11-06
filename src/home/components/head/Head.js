import React from 'react';
import {HeadWrap,Logo,Nav,NavItem,SearchWrap,Search,SearchInfo} from './headStyle';
import {connect} from 'react-redux';
import * as headActionCreate from './store/headActionCreate';
import {Link} from 'react-router-dom';

//  react-redux 会把state映射成props，可以把有状态组件改成无状态组件

function showInfo(flag) {
   if(flag){
       return(
           <SearchInfo>
               <span>精品锅具</span>
               <span>厨房用品</span>
               <span>酒杯茶具</span>
           </SearchInfo>
       )
   }else {
       return null;
   }
}


function Head(props) {
    //  相同属性名可以进行es6结构赋值
    const {flag,inputFocus,inputBlur} = props;
    return(
        <div>
            <HeadWrap className="clearfix">
                <Logo/>
                <Nav>
                    <Link to="/"><NavItem>首页</NavItem></Link>
                    <Link to="/detail"><NavItem>详情页面</NavItem></Link>
                </Nav>
                {showInfo (flag)}
                <SearchWrap>
                    <Search className={props.flag?'flag':''}
                        placeholder='请输入搜索内容'
                        onFocus={inputFocus}
                        onBlur={inputBlur}
                    />
                    <span className='glyphicon glyphicon-search'/>
                </SearchWrap>
                {/*<span>退出登录</span>*/}
            </HeadWrap>
        </div>
    )
}

// const mapState = (state) =>{
//     return{     //   head主reducer中的key值
//         flag:state.head.flag
//     }
// };

 // 映射数据
const mapState = (state) =>({
    flag:state.head.flag
});

//  派发方法
const mapDispatch = (dispatch) =>({
    inputFocus(){
        // const action = {
        //     type:'input_focus'
        // };
        // dispatch(action);

        //  如果一个组件中的action有很多个，把他们放在一个单独的文件下，在组件中引入使用
        dispatch(headActionCreate.handleFocus());
    },
    inputBlur(){
        // const action = {
        //     type:'input_blur'
        // };
        // dispatch(action);
        dispatch(headActionCreate.handleBlur());
    },
});


//  connect  连接React组件与 Redux store。
export default connect(mapState,mapDispatch) (Head);