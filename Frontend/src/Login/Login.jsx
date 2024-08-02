import ImageHome from "../image/Ilustration/img-LoginHome.png";
import {
  ImgHomeStyle,
  ContainerLogin,
  Section1,
  TituloContainer,
} from "../styled/Login";
import { useState } from "react";
import axios from "axios";


const Login = () => {

const [cpf, setCpf] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const [user, setUser] = useState(null);

const handleLogin = async (event) => {
  event.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:3000",
      JSON.stringify({ cpf, password }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    setUser(response.data);
  } catch (error) {
    if (!error?.response) {
      setError("Erro ao acessar o site");
    } else if (error.response.status === 401) {
      setError("Usuário ou senha inválidos");
    }
  }
};

  return (
    <Section1>
      <ImgHomeStyle
        src={ImageHome}
        alt="Dois colaboradoes da limpeza higienizando o ambiente."
      />
      <ContainerLogin>
        <TituloContainer>Login</TituloContainer>
        <div className="Form">
          {user == null ? (
            <>
              <div className="login-form" />
              <h2>Login</h2>
              <form className="formulario">
                <input
                  type="text"
                  name="cpf"
                  placeholder="CPF"
                  required
                  onChange={(event) => setCpf(event.target.value)}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={(event) => setPassword(event.target.value)}
                />
                <button
                  type="submit"
                  className="btn-login"
                  onClick={(event) => handleLogin(event)}
                >
                  Entrar
                </button>
              </form>
              <p>{error}</p>
            </>
          ) : (
            <div>Teste {user.cpf}</div>
          )}
        </div>
      </ContainerLogin>
    </Section1>
  );
};

export default Login;
