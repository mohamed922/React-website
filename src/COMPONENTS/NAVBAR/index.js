import React from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import {NavbarLogo ,Container,Navbar,LogoText,List,ListItem,Anchore } from './style'
 const NavbarSec=()=> {
  const Link = styled(NavLink)` 
  display: block;
  color: #222;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;
  &:hover {
      color: #eb5424
  }
`

  return (
    <Navbar>
            
    <Container>
        
        <NavbarLogo>
            <LogoText>MY PROFILE</LogoText>
        </NavbarLogo >
        
        
        <List>
            <ListItem ><Anchore><Link to="/" >Home</Link></Anchore></ListItem>
            <ListItem ><Anchore>Work</Anchore></ListItem>
            <ListItem ><Anchore>Portfolio</Anchore></ListItem>
            <ListItem ><Anchore>Resume</Anchore></ListItem>
            <ListItem ><Anchore>About</Anchore></ListItem>
            <ListItem ><Anchore><Link to="/contact">Contact</Link></Anchore></ListItem>
        </List>
        
    </Container>
    
</Navbar>
  );
}

export default NavbarSec;
