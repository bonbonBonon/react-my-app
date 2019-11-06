import React , {Component} from 'react';
import {FootWrap,BottomLeft,BottomMid,BottomRight,Logo} from './footStyle';
import img1 from '../../../static/wb1.jpg';
import img2 from '../../../static/wb2.jpg';

class Foot extends Component{

    state ={
        list:[
            {title:"关于我们",desc:["我的品牌","公司动态","经历发展","商品推广"]},
            {title:"支付方式",desc:["微信支付","支付宝","百度钱包","货到付款"]},
            {title:"相关服务",desc:["退货政策","购物流程","客服服务","商务合作"]},
        ]
    };

    render() {
        return(
            <div>
                <FootWrap className="clearfix">
                    <BottomLeft>
                        <Logo/>
                        <p>
                            青竹良品原创生活类电商品牌，秉承一贯的严谨态度，我们深入世界各地，从源头全程严格把控商品生产环节，
                            力求帮消费者甄选到最优质的商品，全线采用天然原材料，控制甲醛低量无害，采用进口工艺，国际生产线不断优化，
                            食材保证核心原产地新鲜直供，让你享受品质生活
                        </p>
                    </BottomLeft>
                    <BottomMid>
                        <img src={img1} alt=""/>
                        <img src={img2} alt=""/>
                    </BottomMid>
                    <BottomRight className="clearfix">
                        {
                            this.state.list.map((item,index) =>{
                                return(
                                    <div v-for={item.length} key={index}>
                                        <h5>{item.title}</h5>
                                        <span>{item.desc}</span>
                                    </div>

                                );
                            })
                        }
                    </BottomRight>
                </FootWrap>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}


export default Foot;



