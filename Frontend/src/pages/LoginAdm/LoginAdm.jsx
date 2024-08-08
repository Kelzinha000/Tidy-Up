import { ErroLogin, ContainerLogin, TituloContainer, BotaoEntrar, InputLogin, FormularioLogin } from "../../styled/Login";
import { BoxBotaoVoltar, IconsNav } from "../../styled/PagCadastro";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { AiFillExclamationCircle } from "react-icons/ai";
import { SectionCadastro } from "../../styled/PagCadastro";
import IconVoltar from "../../image/Icons/IconVoltar.png"


const LoginAdm = () => {

    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [admin, setAdm] = useState(null);
  
    const navigate = useNavigate()
  
    const handleLogin = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post(
          "http://localhost:3000/LoginAdm",
          JSON.stringify({ cpf, password }),
          {
            headers: { "Content-Type": "application/json" },
          },
        );
        setAdm(response.data)
        return navigate("/funcionarios")
      } catch (error) {
        if (!error?.response) {
          setError("Erro ao acessar o site");
        } else if (error.response.status === 401) {
          setError(" Usuário ou senha inválidos",);
        }
      }
    };
    return (
      <SectionCadastro>
         <ContainerLogin>
        <div >
          {admin === null ? (
            <>
       
             <BoxBotaoVoltar>
             <IconsNav src={IconVoltar} alt="" />
              <Link to="/" className='Link-voltar'>Voltar</Link>
             </BoxBotaoVoltar>
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
                >Entrar
                </BotaoEntrar>
              </FormularioLogin>

         </>   
          ) : (
            <div>
            </div>
          )}
        </div>
      </ContainerLogin>
      </SectionCadastro>
    )
}


export default LoginAdm;

