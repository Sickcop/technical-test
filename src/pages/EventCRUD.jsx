import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTrashAlt, FaEye, FaEdit } from 'react-icons/fa';

const EventCRUD = () => {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [idCounter, setIdCounter] = useState(1);

  const addEvent = () => {
    const newEvent = {
      id: idCounter,
      title,
      date,
      location,
      description,
      imageUrl
    };
    setEvents([...events, newEvent]);
    clearForm();
    setIdCounter(idCounter + 1);
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const clearForm = () => {
    setTitle('');
    setDate('');
    setLocation('');
    setDescription('');
    setImageUrl('');
  };

  return (
    <Container>
      <Header>
        <h1>Crear nuevo evento</h1>
        <Button onClick={addEvent}>Enviar</Button>
      </Header>
      <Form>
        <Input 
          type="text" 
          placeholder="Título" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <Input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
        />
        <Input 
          type="text" 
          placeholder="Ubicación" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
        />
        <TextArea 
          placeholder="Descripción" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
        <Input 
          type="text" 
          placeholder="URL de la imagen" 
          value={imageUrl} 
          onChange={(e) => setImageUrl(e.target.value)} 
        />
      </Form>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Fecha</th>
            <th>Ubicación</th>
            <th>Descripción</th>
            <th>URL de la Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.id}>
              <td>{event.id}</td>
              <td>{event.title}</td>
              <td>{event.date}</td>
              <td>{event.location}</td>
              <td>{event.description}</td>
              <td>{event.imageUrl}</td>
              <td>
                <IconButton onClick={() => deleteEvent(event.id)}><FaTrashAlt /></IconButton>
                <IconButton><FaEye /></IconButton>
                <IconButton><FaEdit /></IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background: linear-gradient(90deg, #ff7e5f, #feb47b);
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    background-color: #00202;
    text-align: left;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    color: #0056b3;
  }
`;

export default EventCRUD;
