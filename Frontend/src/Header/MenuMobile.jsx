import React from "react";
import { FaTimes } from "react-icons/fa";
import { ContainerNav, ContentLinks, LogoNavMobile, LinksNavMobile, BoxLink, BackgroundNavMobile } from "../styled/Header.js"
import imgLogoBranca from "../image/Logo-TidyUp-branca.png"
import { LuClipboardList } from "react-icons/lu";
import { LuClipboardSignature } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";


const MenuMobile = ({ active }) => {
    const fecharMenu = () => {
        active(false)
    }

    return (
        <BackgroundNavMobile  onClick={fecharMenu}>
        <ContainerNav menumobile={active}>
         
            <FaTimes className="svg-fechar" />
            <ContentLinks>
                <BoxLink>
                    <GoHomeFill className="Icons-svg"></GoHomeFill>
                    <LinksNavMobile href="#">Home</LinksNavMobile>
                </BoxLink>
                <BoxLink>
                   <LuClipboardSignature className="Icons-svg"></LuClipboardSignature>
                    <LinksNavMobile href="#">Criar relatório</LinksNavMobile>
                </BoxLink>
                <BoxLink>
                <LuClipboardList className="Icons-svg"></LuClipboardList>
                    <LinksNavMobile href="#">Relatórios</LinksNavMobile>
                </BoxLink>
                <BoxLink>
                    <FaUser className="Icons-svg"></FaUser>
                  <LinksNavMobile href="#">Perfil</LinksNavMobile>
                </BoxLink>
                
          
                   
                <LogoNavMobile src={imgLogoBranca} alt="" />

            </ContentLinks>
            
        </ContainerNav>
        </BackgroundNavMobile>
    )
}

export default MenuMobile;