import styled from "styled-components";
import logo from '../../../static/logo.jpg'

export const FootWrap = styled.div`
  width: 100%;
  height: 300px;
  padding: 40px 150px;
  background-color: #ccc;
  border-bottom: 1px solid #000;
  margin-top: 100px;
`;
export const BottomLeft = styled.div`
  width: 350px;
  height: 220px;
  padding: 0 30px;
  float: left;
  p{
      margin-top: 20px;
      font-size: 12px;
      line-height: 20px;
      color:#666;
  }
`;
export const Logo = styled.a`
  display: block;
  width: 100px;
  height: 50px;
  background: url(${logo});
  background-size: 100px 50px;
`;
export const BottomMid = styled.div`
  width: 300px;
  height: 220px;
  float: left;
  text-align:center;
  line-height: 220px;
  img{
      width: 100px;
      height: 100px;
      margin: 0 25px;
  }
`;
export const BottomRight = styled.div`
  width: 350px;
  height: 220px;
  float:right;
  div{
    width: 100px;
    float:left;
    color:#333;
    margin-right: 16px;
    span{
      font-size: 12px;
      color:#666;
      line-height: 30px;
    }
  }
`;
