import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Spinner = styled.div`
  width: 100px;
  height: 100px;
  border: 5px solid #ccc;
  border-top: 5px solid ${(props) => props.theme["gray-900"]};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 12px;
`;

export const TextLoad = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

