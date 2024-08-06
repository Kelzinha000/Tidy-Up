import React from "react";
import { FaTimes } from "react-icons/fa";
import { ContainerNav, ContentLinks, LogoNavMobile, BoxLink, BackgroundNavMobile } from "../styled/Header.js"
import imgLogoBranca from "../image/Logo-TidyUp-branca.png"
import { LuClipboardList } from "react-icons/lu";
import { LuClipboardSignature } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { Link } from "react-router-dom";


const MenuMobile = ({ active }) => {
    const fecharMenu = () => {
        active(false)
    }

    return (
        <>
        <ContainerNav menumobile={active}>
         
            <FaTimes className="svg-fechar" onClick={fecharMenu} />
            <ContentLinks>
                <BoxLink>
                    <GoHomeFill className="Icons-svg" ></GoHomeFill>
                    <Link to='/Home' className="linksNavMobile" onClick={fecharMenu}>Home</Link>
                </BoxLink>
                <BoxLink>
                   <LuClipboardSignature className="Icons-svg"></LuClipboardSignature>
                   <Link to='/addRelatorio' className="linksNavMobile" onClick={fecharMenu}>Criar relatório</Link>
                </BoxLink>
                <BoxLink>
                <LuClipboardList className="Icons-svg"></LuClipboardList>
                <Link to='/relatorios' className="linksNavMobile"onClick={fecharMenu}>Relatórios</Link>
                </BoxLink>
                <BoxLink>
                    <FaUser className="Icons-svg"></FaUser>
                    <Link to='' className="linksNavMobile" onClick={fecharMenu}>Perfil</Link>
                </BoxLink>
                
          
                   
                <LogoNavMobile src={imgLogoBranca} alt="" />

            </ContentLinks>
            
        </ContainerNav>
         <BackgroundNavMobile  onClick={fecharMenu}>
        </BackgroundNavMobile>
        </>
    )
}

export default MenuMobile;