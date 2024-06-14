import React, { useState, useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import axios from 'axios';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import NavBar from './components/Navbar.jsx';
import EventCard from './components/EventCards';
import LoginForm from './pages/LoginForm.jsx';
import EventForm from './pages/EventForm.jsx';

// Temas para modo diurno y nocturno
const lightTheme = {
  background: '#fff',
  color: '#000',
  cardBackground: '#2a2a2a',
  cardColor: '#fff',
};

const darkTheme = {
  background: '#333',
  color: '#fff',
  cardBackground: '#1a1a1a',
  cardColor: '#fff',
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

const eventIDs = [
  "904070036817", "917343357677", "918436477227", "116364173375", "922961361277",
  "814554884587", "922407083417", "922654814387", "922407344197", "922586479997",
  "902136834557", "768757764167", "883757441297", "907823292907", "907184161247",
  "900173381817", "880835060377", "899253420187", "857062054677"
];

const App = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState(lightTheme);
  const eventContainerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          eventIDs.map(id => 
            axios.get(`https://www.eventbriteapi.com/v3/events/${id}/?token=TRRYSRKJ3K2NWQ6AFBRJ`)
          )
        );
        const eventsData = responses.map(res => res.data);
        setEvents(eventsData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleScroll = (scrollOffset) => {
    if (eventContainerRef.current) {
      eventContainerRef.current.scrollBy({
        left: scrollOffset,
        behavior: 'smooth'
      });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <NavBar />
        <ToggleButton onClick={toggleTheme}>
          {theme === lightTheme ? 'Modo Nocturno' : 'Modo Diurno'}
        </ToggleButton>
        <Routes>
          <Route 
            path='/' 
            element={
              <EventContainer ref={eventContainerRef}>
                {events.map(event => (
                  <EventCard 
                    key={event.id}
                    title={event.name?.text ?? "Título no disponible"}
                    description={event.description?.text ?? "Descripción no disponible"}
                    imageUrl={event.logo?.original?.url ?? "https://via.placeholder.com/1600x800?text=Imagen+no+disponible"}
                  />
                ))}
              </EventContainer>
            } 
          />
          <Route path='/Login' element={<LoginForm />} />
          <Route path='/Create' element={<EventForm />} />
        </Routes>
        {location.pathname === '/' && (
          <>
            <NavButtonLeft onClick={() => handleScroll(-1000)}>◀</NavButtonLeft>
            <NavButtonRight onClick={() => handleScroll(1000)}>▶</NavButtonRight>
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

const EventContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  overflow-x: hidden;
  position: relative;
`;

const NavButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 3rem;
  color: #ff6584;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: color 0.3s ease;
`;

const NavButtonLeft = styled(NavButton)`
  left: 0;
`;

const NavButtonRight = styled(NavButton)`
  right: 0;
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(90deg, #ff7e5f, #feb47b);
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
`;

export default App;
