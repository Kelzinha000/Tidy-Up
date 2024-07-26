import React from "react";
import { FaTimes } from "react-icons/fa";
import { ContainerNav, Content, Logo } from "../styled/Header.js"
import imgLogoBranca from "../image/Logo-TidyUp-branca.png"

const MenuMobile = ({ active }) => {
    const fecharMenu = () => {
        active(false)
    }

    return (
        <ContainerNav menumobile={active}>
            <FaTimes className="svg-fechar" onClick={fecharMenu} />
            <Content>
                <h1>Home</h1>
                <h1>Sobre</h1>
                <Logo src={imgLogoBranca} alt="" />
            </Content>
        </ContainerNav>
    )
}

export default MenuMobile;