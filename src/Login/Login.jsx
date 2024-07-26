import ImageHome from '../image/Ilustration/img-LoginHome.png'
import { ImgHomeStyle, ContainerLogin, Section1, TituloContainer } from '../styled/Login'

const Login = () => {
    return (
        <Section1>
            <ImgHomeStyle src={ImageHome} alt="Dois colaboradoes da limpeza higienizando o ambiente." />
            <ContainerLogin>
                <TituloContainer>Login</TituloContainer>
            </ContainerLogin>
        </Section1>
    )
}

export default Login;