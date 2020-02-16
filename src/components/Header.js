import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.svg';
import { StyledContainer } from './Container';
import Link from './Link';

const NavContainer = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

const NavItem = styled.li`
  display: inline;
  margin: 0 2em 0 0;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledHeader = styled.header`
  margin-bottom: 3.7em;
  margin-top: 80px;

  @media screen and (max-width: 480px) {
    margin-top: 0;
  }
`;

const Logo = styled.img`
  @media screen and (max-width: 480px) {
    margin-bottom: 2em;
  }
`;

export default props => {
  return (
    <StyledHeader>
      <NavContainer>
        <div id='logo-wrapper'>
          <Link to='/' style={{ textDecoration: 'none', borderBottom: 'none' }}>
            <Logo src={logo} alt='logo' />
          </Link>
        </div>
        <nav id='main-nav'>
          <NavList>
            <NavItem>
              <Link to='projects' activeStyle={{ color: '#33d399' }}>
                Projects
              </Link>
            </NavItem>
            <NavItem>
              <Link to='blog' activeStyle={{ color: '#33d399' }}>
                Blog
              </Link>
            </NavItem>
            <NavItem>
              <a href='mailto:itsricardo.contact@gmail.com?subject=Hi'>
                Contact
              </a>
            </NavItem>
          </NavList>
        </nav>
      </NavContainer>
    </StyledHeader>
  );
};
