import Header from "../../Header/Header.jsx"
import FormularioLogin from "../../Formulario/Formulario.jsx";
import Section02 from "../../Setion02/Section02.jsx"
import Footer from "../../Footer/Footer.jsx"
import { HeaderNav, LogoBox, Logo, LogoMobile } from "../../styled/Header.js";
import logoImg from "../../image/Logo-TidyUp.png"
import logoMobile from "../../image/LogoTidyUp-mobile.png"

const Login = () => {
    return (
        <>
        <HeaderNav>
        <LogoBox> 
                <a href="#">
                    <Logo src={logoImg} alt="Logo Tidy Up" />
                    <LogoMobile src={logoMobile} alt="Logo Tidy Up" />
                </a>
            </LogoBox>
        </HeaderNav>
        
            <FormularioLogin />
            <Section02 />
            <Footer />
        </>
    )
}

export default Login;