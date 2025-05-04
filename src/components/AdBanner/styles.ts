import styled from 'styled-components';

 export const AdContainer = styled.div`
  width: 100%;
  max-width: 728px; /* Tamanho padrão de banners grandes */
  margin: 2rem auto; /* Centraliza e dá espaço em cima e embaixo */
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1rem;
  }

  ins.adsbygoogle {
    display: block;
    width: 100%;
    height: auto;
  }
`;