import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Link, Outlet } from 'react-router-dom';

// Temas para modo diurno y nocturno
const lightTheme = {
  background: '#fff',
  color: '#000',
};

const darkTheme = {
  background: '#333',
  color: '#fff',
};

// Estilos globales
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    transition: background-color 0.3s, color 0.3s;
    margin: 0;
    padding: 0;
    font-family: system-ui;
  }
`;

const NavBar = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBarContainer>
        <LogoLink to='/'>
          <Logo>Gestion de Eventos</Logo>
        </LogoLink>
        <NavLinks>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/'>Events</NavLink>
          <NavLink to='/'>Notifications</NavLink>
          <NavLink to='/'>About Us</NavLink>
          <NavLink to='/login'><LoginButton>Login</LoginButton></NavLink>
          <NavLink to='/ManageEvents'><LoginButton>Create</LoginButton></NavLink>
          <ToggleButton onClick={toggleTheme}>
            {theme === lightTheme ? 'Modo Nocturno' : 'Modo Diurno'}
          </ToggleButton>
        </NavLinks>
        <Outlet />
      </NavBarContainer>
    </ThemeProvider>
  );
};

const NavBarContainer = styled.nav`
  width: 100%;
  min-height: 4.5rem;
  background: #2a2a2a;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff6584;
  margin-left: 1.5rem;
`; 

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  transition: color 0.3s;

  &:hover {
    color: #ff6584;
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
  text-decoration: none;
  outline: none;

  &:hover {
    filter: brightness(0.9);
  }
`;

const ToggleButton = styled.button`
  background: linear-gradient(90deg, #ff7e5f, #feb47b);
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-right: 1.5rem;
`;

export default NavBar;
