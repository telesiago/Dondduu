// styles.ts ou no seu arquivo de estilos do Dashboard
import styled from 'styled-components';

export const MonthFilterContainer = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  label {
    font-size: 1rem;
    color: ${(props) => props.theme["gray-300"]};
  }

  input[type="month"] {
    background-color: ${(props) => props.theme["gray-900"]};
    border: 1px solid ${(props) => props.theme["gray-700"]};
    color: ${(props) => props.theme["gray-100"]};
    padding: 0.5rem 1rem;
    border-radius: 6px;

    &::-webkit-calendar-picker-indicator {
      filter: invert(1); /* Para ícone branco no dark mode */
    }
  }
`;
