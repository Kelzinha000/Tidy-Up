import { Nav, Logo, LogoBox, HeaderNav, LogoMobile } from "../styled/Header.js";
import logoImg from '../image/Logo-TidyUp.png'
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import MenuMobile from './MenuMobile.jsx';
import logoMobile from '../image/LogoTidyUp-mobile.png'
import { Link } from "react-router-dom";
import "../index.css"

const Header = ({titulo, cadastro}) => {
    const [menumobile, setMenumobile] = useState(false)

    const mostrarMenu = () => {
        setMenumobile(!menumobile)
    }
    return (
        <HeaderNav>
            <LogoBox> 
                <a href="/">
                    <Logo src={logoImg} alt="Logo Tidy Up" />
                    <LogoMobile src={logoMobile} alt="Logo Tidy Up" />
                </a>
            </LogoBox>
       
            <Nav>
               <Link className="linksNav" to="/Home">Home</Link>
                <Link className="linksNav" to='/addRelatorio'>{titulo}</Link>
                <Link className="linksNav" to="/relatorios">Relatórios</Link>
                <Link className="linksNav" to="/cadastro">{cadastro}</Link>
                <Link className="linksNav" to="/perfil">Perfil</Link>
                <FaBars className="svg-abrir" onClick={mostrarMenu} />
                {menumobile && <MenuMobile active={setMenumobile} />}
            </Nav>
        </HeaderNav>
    )
}

export default Header;