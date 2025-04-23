import { Spinner } from "phosphor-react";
import { Container, TextLoad } from "./styles";

export function Loading() {
    return (
      <Container>
        <Spinner />
        <TextLoad>Carregando...</TextLoad>
      </Container>
    );
  }