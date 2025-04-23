// src/pages/Login.styles.ts
import styled from "styled-components";

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

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
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

  &:hover {
    background-color: ${(props) => props.theme["green-700"]};
  }
`;

export const GoogleButton = styled(Button)`
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
  margin-bottom: 5rem;
`;
