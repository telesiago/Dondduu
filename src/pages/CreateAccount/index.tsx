
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../lib/firebase";

import LogoImg from "../../assets/logo-dt-money.svg"
import {
  Container,
  Logo,
  Input,
  Button,
  Error,
  BackLogin,
  Spinner,
} from "./styles";
import { AdBanner } from "../../components/AdBanner";

export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);



  const criarConta = async () => {
    if (senha.length < 6) {
      setErro("A senha deve ter no mínimo 6 caracteres.");
      return;
    }
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      navigate("/dashboard");
    } catch (error) {
      setErro("Erro ao criar conta. Tente novamente.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <Container>
      <Logo src={LogoImg} alt="Logo Dondduu" />

      {erro && <Error>{erro}</Error>}

      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <Button onClick={criarConta} disabled={loading}>
      {loading ? <Spinner />: "Criar Conta"}</Button> 
      <BackLogin onClick={() => navigate("/")}>Voltar ao Login</BackLogin>

      <AdBanner slot="8378202361" />
    </Container>
  );
}
