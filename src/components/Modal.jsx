import React, { useState } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  display: ${props => (props.modal ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

const Overlay = styled.div`
  display: ${props => (props.modal ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const CloseButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
`;

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      <Overlay modal={modal} onClick={toggleModal} />
      
      <ModalContainer modal={modal}>
        <Content>
          <h2>Modal</h2>
          <CloseButton onClick={toggleModal}>
            CLOSE
          </CloseButton>
        </Content>
      </ModalContainer>
      
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam excepturi corrupti doloremque accusantium id ratione ipsa veniam eum magnam soluta molestias accusamus, maiores tenet
      </p>
    </>
  );
}
