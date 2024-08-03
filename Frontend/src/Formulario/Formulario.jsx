import ImageHome from "../image/Ilustration/img-LoginHome.png";
import { ImgHomeStyle, ErroLogin, ContainerLogin, Section1, TituloContainer, BotaoEntrar, InputLogin, FormularioLogin } from "../styled/Login";
import { useState } from "react";
import axios from "axios";
import { AiFillExclamationCircle } from "react-icons/ai";
import { useNavigate} from "react-router-dom"

const Login = () => {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  const navigate = useNavigate()

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

      return navigate("/cadastro")

    } catch (error) {
      if (!error?.response) {
        setError("Erro ao acessar o site");
      } else if (error.response.status === 401) {
        setError(" Usuário ou senha inválidos",);
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
        <div className="Form">
          {user == null ? (
            <>
              <div className="login-form" />
              <FormularioLogin className="formulario">
                <TituloContainer>Login</TituloContainer>
                <InputLogin
                  type="text"
                  name="cpf"
                  placeholder="CPF"
                  required
                  onChange={(event) => setCpf(event.target.value)}
                />

                <InputLogin
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={(event) => setPassword(event.target.value)}
                />
                <ErroLogin>{error && <AiFillExclamationCircle></AiFillExclamationCircle>}{error}</ErroLogin>
                <BotaoEntrar
                  type="submit"
                  className="btn-login"
                  onClick={(event) => handleLogin(event)}
                >
                  Entrar
                </BotaoEntrar>
              </FormularioLogin>

            </>
          ) : (
            <div>Teste {user.cpf}

            </div>
          )}
        </div>
      </ContainerLogin>
    </Section1>
  );
};

export default Login;
