import Header from "../../Header/Header.jsx";
import { BoxConteudoFuncionario, BoxHistoriocoRelatorios, BoxPerfil, CPFuncionario, ImgPerfil, InfoFuncionario, NomeFuncionario, SectionPerfil } from "../../styled/Perfil.js";
import imgPerfil from "../../image/img-perfil.png"

const Perfil = () => {
    return(
    <>
    <Header/>
    <SectionPerfil>
        <BoxPerfil>
            <BoxConteudoFuncionario>
            <ImgPerfil src={imgPerfil} alt="imagem de perfil do usuario" />
            <InfoFuncionario>
            <NomeFuncionario>Funcionario</NomeFuncionario>
            <CPFuncionario>CPF: 000000000</CPFuncionario>
            </InfoFuncionario>
        </BoxConteudoFuncionario>
        <BoxHistoriocoRelatorios>
            
        </BoxHistoriocoRelatorios>
        </BoxPerfil>
    </SectionPerfil>
    </>
    )
}

export default Perfil;