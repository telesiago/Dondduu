
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail
} from "firebase/auth";
import { auth } from "../../lib/firebase";

import LogoImg from "../../assets/logo-dt-money.svg"
import {
  Container,
  Logo,
  Input,
  Button,
  GoogleButton,
  Error,
  ForgotPassword,
} from "./styles";
import { AdBanner } from "../../components/AdBanner";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const loginEmailSenha = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate("/dashboard");
    } catch {
      setErro("Email ou senha inválidos.");
    }
  };

  const loginGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch (error) {
      setErro("Erro ao fazer login com o Google.");
      console.log(error);

    }
  };

  const recuperarSenha = async () => {
    if (!email) {
      setErro("Informe seu email para recuperar a senha.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setErro("Email de recuperação enviado.");
    } catch {
      setErro("Erro ao enviar email de recuperação.");
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

      <Button onClick={loginEmailSenha}>Entrar</Button>
      <GoogleButton onClick={loginGoogle}>Entrar com Google</GoogleButton>
      <Button onClick={() => navigate('/createAccount')}>Criar Conta</Button>

      <ForgotPassword onClick={recuperarSenha}>
        Esqueceu sua senha?
      </ForgotPassword>

      <AdBanner slot="8378202361" />
    </Container>
  );
}
