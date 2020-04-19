
import styled from 'styled-components';

export const Container = styled.div `
    width: 85%;
    margin: auto;

`
export const Navbar = styled.div` 
    padding: 10px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000

`

export const NavbarLogo = styled.div`
    width: 50%;
    float: left;
    @media (max-width : 991px) {
            width: 100%;
            float: none;
        }
`

export const LogoText = styled.h2 `
    font-size: 30px;
    font-weight: bold

`

export const List = styled.ul `
    
    float : none ;
    list-style: none;
    @media (max-width : 991px) {
     
        float: left;
        margin-top: 10px;
        display: none
    }

`
export const ListItem = styled.li`
    display: inline-block;
    @media (max-width:991px) {
        display: block;
        text-align: center;
    }

`
export const Anchore = styled.a` 
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    &:hover {
        color: #eb5424
    }
`



