import React, { useState } from 'react';
import styled from 'styled-components';

const EventCard = ({ title, description, imageUrl, theme }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <Card theme={theme}>
        <CardImage src={imageUrl} alt={title} />
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <CardButton onClick={toggleModal}>Details</CardButton>
        </CardContent>
      </Card>

      {modalOpen && (
        <Modal>
          <ModalContent>
            <h2>{title}</h2>
            <p>{description}</p>
            <CloseButton onClick={toggleModal}>Close</CloseButton>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

const Card = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.cardColor};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 1rem;
  min-width: 30rem;
  height: 30rem;
  
  transition: transform 0.3s ease-in-out;
  
  @media screen and (max-width: 768px) {
    min-width: 20rem;
    height: auto;
    margin: 1rem auto;
    width: 80%;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  margin: 0.5rem 0;
`;

const CardButton = styled.button`
  background: linear-gradient(90deg, #ff7e5f, #feb47b);
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
  width: 100%;
  font-size: 1rem;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: #fff; 
  padding: 2rem;
  border-radius: 10px;
`;

const CloseButton = styled.button`
  background: #ff7e5f;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
`;

export default EventCard;
