import styled from 'styled-components';

const LoginForm = () => {

  
  return (
    <FormContainer >
      <FormGroup>
        <label htmlFor="username">Usuario o Email:</label>
        <input
          type="text"
          id="username"
          name="username"
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
        />
      </FormGroup>
      <SubmitButton type="submit">Iniciar sesión</SubmitButton>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  max-width: 400px;
  margin: 3rem auto;
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
  input[type="password"] {
    width: 97%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: linear-gradient(90deg, #ff7e5f, #feb47b);;
  color: white;
  border: none;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default LoginForm;
