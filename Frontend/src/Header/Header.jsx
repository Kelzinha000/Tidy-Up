import { Nav, Logo, LogoBox, HeaderNav, LogoMobile, LinksNav } from "../styled/Header.js";
import logoImg from '../image/Logo-TidyUp.png'
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import MenuMobile from './MenuMobile.jsx';
import logoMobile from '../image/LogoTidyUp-mobile.png'

const Header = () => {
    const [menumobile, setMenumobile] = useState(false)

    const mostrarMenu = () => {
        setMenumobile(!menumobile)
    }
    return (
        <HeaderNav>
            <LogoBox> 
                <a href="#">
                    <Logo src={logoImg} alt="Logo Tidy Up" />
                    <LogoMobile src={logoMobile} alt="Logo Tidy Up" />
                </a>
            </LogoBox>
       
            <Nav>
                <LinksNav href="">Home</LinksNav>
                <LinksNav href="#Section-02">Sobre</LinksNav>
                <LinksNav href="#footer">Contato</LinksNav>
                <LinksNav href="#">Login</LinksNav>
                <FaBars className="svg-abrir" onClick={mostrarMenu} />
                {menumobile && <MenuMobile active={setMenumobile} />}
            </Nav>
        </HeaderNav>
    )
}

export default Header;