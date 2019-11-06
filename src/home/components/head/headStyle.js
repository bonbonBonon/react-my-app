import styled from 'styled-components';
import logo from '../../../static/logo.jpg';

export const HeadWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 20;
    height:60px;
    background:#ccc;
    padding: 0 70px;
`;
export const Logo = styled.a`
    height:60px;
    width:100px;
    display:block;
    background:url(${logo});
    background-size: contain;
    float: left;
    margin-right: 30px;
`;
export const Nav = styled.div`
    line-height: 60px;
    font-size: 20px;
    float: left;
`;
export const NavItem = styled.span`
    text-align: center;
    cursor: pointer;
    margin: 0 5px;
    padding: 18px 15px;
`;
export const SearchWrap = styled.div`
    float: right;
    position: relative;
    
    span{
      position: absolute;
      right: 13px;
      top: 23px;
    }
`;
export const Search = styled.input`
    height:30px;
    width:150px;
    border-radius: 30px;
    outline: none;
    border: none;
    margin-top: 15px;
    padding: 0 15px;
    transition: 1s;
    &.flag{
      width:200px;
      transition: 1s;
    }
`;
export const SearchInfo = styled.div`
    width: 300px;
    height: 60px;
    float: left;
    line-height: 60px;
    color:#fff;
    margin-left: 150px;
    span{
      padding: 0 10px;
      font-size: 16px;
    }
`;

