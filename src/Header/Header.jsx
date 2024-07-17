import { Nav , Logo, LogoBox , HeaderNav } from "../styled/App.js";
import logoImg from '../image/Logo-TidyUp.png'
import {useState} from "react";
import { FaBars } from "react-icons/fa";
import MenuMobile from './MenuMobile.jsx';


const Header = () => {
const [menumobile, setMenumobile] = useState(false)

const mostrarMenu = () => {
    setMenumobile(!menumobile)
}
    return(
        <>
        <HeaderNav>
        <LogoBox>
            <Logo src={logoImg} alt="Logo Tidy Up" />
        </LogoBox>
        
        <Nav>
<a href="">Home</a>
<a href="">Sobre</a>

<FaBars className="svg-abrir" onClick={mostrarMenu}/>
        {menumobile && <MenuMobile active={setMenumobile}/>}
        </Nav>

        </HeaderNav>
        </>
    )
}

export default Header;