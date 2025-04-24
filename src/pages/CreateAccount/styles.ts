import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid ${(props) => props.theme["green-500"]};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${spin} 1s linear infinite;
  margin: 0 auto;
`;


export const Container = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme["gray-900"]};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme["gray-800"]};
  border: none;
  outline: none;
  padding: 1rem;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  color: white;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme["green-500"]};
  color: white;
  font-weight: bold;
  padding: 1rem;
  width: 100%;
  max-width: 400px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: background-color 0.2s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme["green-700"]};
  }
`;

export const BackLogin = styled(Button)`
  background-color: white;
  color: ${(props) => props.theme["gray-900"]};
 
  &:hover {
    background-color: #e2e2e2;
  }
`;

export const Error = styled.p`
  color: red;
  margin-bottom: 1rem;
`;

export const Logo = styled.img`
  width: 20rem;
  margin-bottom: 3rem;
`;
