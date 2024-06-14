import React, { useState } from 'react';
import styled from 'styled-components';

const EventForm = ({ onSubmit }) => {
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
    imageUrl: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(eventData);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        <label htmlFor="title">Título del evento:</label>
        <input
          type="text"
          id="title"
          name="title"
          required
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="date">Fecha:</label>
        <input
          type="date"
          id="date"
          name="date"
          required
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="location">Ubicación:</label>
        <input
          type="text"
          id="location"
          name="location"
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="description">Descripción:</label>
        <textarea
          id="description"
          name="description"
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="imageUrl">URL de la imagen:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
        />
      </FormGroup>
      <SubmitButton type="submit">Guardar evento</SubmitButton>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  background: #2a2a2a;
  color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const FormGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input[type="text"],
  input[type="date"],
  textarea {
    width: 97%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  textarea {
    height: 100px;
  }
`;

const SubmitButton = styled.button`
  color: white;
  background: linear-gradient(90deg, #ff7e5f, #feb47b);
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default EventForm;
