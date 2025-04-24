import styled from "styled-components";
import { breakpoints } from "../../styles/media";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 70rem;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme["gray-700"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }

    svg {
      line-height: 0;
      border: 0;
      background: ${(props) => props.theme["gray-700"]};
      cursor: pointer;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

interface PriceHighlightProps {
  variant: "income" | "outcome";
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === "income"
      ? props.theme["green-300"]
      : props.theme["red-300"]};
`;

export const CardList = styled.div`
  display: none;

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;
  }
`;

export const TransactionCard = styled.div`
  background: ${(props) => props.theme["gray-700"]};
  padding: 1.25rem;
  border-radius: 6px;

  .description {
    font-size: 1rem;
    color: ${(props) => props.theme["gray-300"]};
  }

  .price {
    font-size: 1.25rem;
    font-weight: bold;
    margin-top: 0.5rem;

    &.income {
      color: ${(props) => props.theme["green-300"]};
    }

    &.outcome {
      color: ${(props) => props.theme["red-300"]};
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme["gray-500"]};
  }
`;
