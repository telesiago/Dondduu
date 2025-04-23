import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const FullScreenContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme["gray-100"]};
  font-size: 1.2rem;
  gap: 1.5rem;
`;

const Spinner = styled.div`
  width: 3rem;
  height: 3rem;
  border: 4px solid ${(props) => props.theme["gray-600"]};
  border-top-color: ${(props) => props.theme["green-500"]};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export function Loading() {
  return (
    <FullScreenContainer>
      <Content
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Spinner />
        <p>Verificando login...</p>
      </Content>
    </FullScreenContainer>
  );
}
