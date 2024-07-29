import React from "react";
import { FaTimes } from "react-icons/fa";
import { ContainerNav, ContentLinks, Logo, LinksNavMobile, BoxLink, IconsNav } from "../styled/Header.js"
import imgLogoBranca from "../image/Logo-TidyUp-branca.png"
import IconHome from "../image/Icons/IconHome.png"
import IconSobre from "../image/Icons/IconSobre.png"
import IconContato from "../image/Icons/IconContato.png"
import IconLogin from "../image/Icons/IconLogin.png"

const MenuMobile = ({ active }) => {
    const fecharMenu = () => {
        active(false)
    }

    return (
        <ContainerNav menumobile={active} onClick={fecharMenu} >
            <FaTimes className="svg-fechar" />
            <ContentLinks>
                <BoxLink>
                    <IconsNav src={IconHome} alt="" />
                    <LinksNavMobile href="#">Home</LinksNavMobile>
                </BoxLink>
                <BoxLink>
                    <IconsNav src={IconSobre} alt="" />
                    <LinksNavMobile href="#Section-02">Sobre</LinksNavMobile>
                </BoxLink>
                <BoxLink>
                    <IconsNav src={IconContato} alt="" />
                    <LinksNavMobile href="#footer">Contato</LinksNavMobile>
                </BoxLink>
                <BoxLink>
                    <IconsNav src={IconLogin} alt="" />
                    <LinksNavMobile href="#">Login</LinksNavMobile>
                </BoxLink>

                <Logo src={imgLogoBranca} alt="" />
            </ContentLinks>
        </ContainerNav>
    )
}

export default MenuMobile;