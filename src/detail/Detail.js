import React , {Component} from 'react';
import Head from "../home/components/head/Head";
import Foot from "../home/components/foot/Foot";
import {Carousel} from 'antd';
import {DetailWrap,} from './detailStyle'

class Detail extends Component{
    state = {
        pic:[
            {url:"//asset.ibanquan.com/s/30611/727/index_global3_pic_1?v=1568268246_1572860962"},
            {url:"//asset.ibanquan.com/s/30611/727/index_global3_pic_2?v=1568268246_1572860962"},
            {url:"//asset.ibanquan.com/s/30611/727/index_global3_pic_3?v=1568268246_1572860962"},
            {url:"//asset.ibanquan.com/s/30611/727/index_global1_pic_1?v=1568268246_1572860962"},
        ]
    };
    render() {
        return(
            <div>
                <DetailWrap>
                    <Head/>
                    <h2>青竹良品原创生活类电商品牌</h2>
                    <Carousel autoplay>
                        {
                            this.state.pic.map((item,index)=>{
                                return(
                                    <div key={index}>
                                        <img src={item.url} alt=""/>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                    <p className="exp">
                        青竹良品原创生活类电商品牌，秉承一贯的严谨态度，我们深入世界各地，从源头全程严格把控商品生产环节，力求帮消费者甄选到最优质的商品，
                        全线采用天然原材料，控制甲醛低量无害，采用进口工艺，国际生产线不断优化，食材保证核心原产地新鲜直供，让你享受品质生活
                    </p>
                    <Foot/>
                </DetailWrap>
            </div>
        )
    }
}

export default Detail;


