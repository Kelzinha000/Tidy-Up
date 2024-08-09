import Header from "../../Header/Header.jsx";
import { BoxConteudoFuncionario, BoxHistoriocoRelatorios, BoxPerfil, CPFuncionario, ImgPerfil, InfoFuncionario, NomeFuncionario, SectionPerfil } from "../../styled/Perfil.js";
import imgPerfil from "../../image/img-perfil.png"
import { useState, useEffect } from "react";
import axios from "axios";

const Perfil = () => {
    const [nome, setNome] = useState([])
    const [id, setId] = useState("")
    useEffect(() => {
        rederizePerfil()
    })
    const rederizePerfil = () => {
        axios({
            method: 'get',
            url: 'http://localhost:3000/funcionarios'
        }).then(response => {
            setNome(response.data[0].nomeFuncionario)
            setId(response.data[0].id)
        })
    }
    return (
        <>
            <Header titulo={"Criar Relatório"}
            
            
            
            />
            <SectionPerfil>
                <BoxPerfil>
                    <BoxConteudoFuncionario>
                        <ImgPerfil src={imgPerfil} alt="imagem de perfil do usuario" />
                        <InfoFuncionario>
                            <NomeFuncionario>{nome}</NomeFuncionario>
                            <CPFuncionario>ID: {id}</CPFuncionario>
                        </InfoFuncionario>
                    </BoxConteudoFuncionario>
                    <BoxHistoriocoRelatorios>
                    </BoxHistoriocoRelatorios>
                </BoxPerfil>
            </SectionPerfil>
        </>
    )
};

export default Perfil;