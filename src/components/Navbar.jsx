// src/components/NavBar.js
import React from 'react';
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom'

const NavBar = () => {
    return (

      <NavBarContainer>
        <Logo>Gestion de Eventos</Logo>
          <NavLinks>
          <Link to='/'>Home</Link>
          <Link to='/'>Events</Link>
          <Link to='/'>Notifications</Link>
          <Link to='/'>About Us</Link>
          <Link to='/login'><LoginButton>Login</LoginButton></Link>
          <Link to='/create'><LoginButton>Create</LoginButton></Link>
        </NavLinks>
        <Outlet />
      </NavBarContainer>

    );
  };

const NavBarContainer = styled.nav`
  width: 100%;
  min-height: 4.5rem;
  background: #2a2a2a;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff6584;
`;

const LoginButton = styled.button`
  background: linear-gradient(90deg, #ff7e5f, #feb47b);
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin: 0 auto 0 auto;
`;

  export default NavBar;
