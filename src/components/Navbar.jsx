import React from 'react';
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavLink to='/'><Logo>Gestion de Eventos</Logo></NavLink>
      <NavLinks>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/'>Events</NavLink>
        <NavLink to='/'>Notifications</NavLink>
        <NavLink to='/'>About Us</NavLink>
        <NavLink to='/login'><LoginButton>Login</LoginButton></NavLink>
        <NavLink to='/create'><LoginButton>Create</LoginButton></NavLink>
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
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff6584;
`;

const NavLink = styled(Link)`
  text-decoration: none; /* Quitar subrayado */
  color: #fff;
  transition: color 0.3s; /* Transición de color */
  
  &:hover {
    color: #ff6584; /* Cambiar color al pasar el mouse */
  }
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
  text-decoration: none; /* Quitar subrayado */
  outline: none; /* Quitar el contorno al hacer clic */
  
  &:hover {
    filter: brightness(0.9); /* Cambiar brillo al pasar el mouse */
  }
`;

export default NavBar;
