import Header from "../../Header/Header.jsx";
import Footer from "../../Footer/Footer.jsx";
import { SectionRelatorios } from "../../styled/Relatorios.js";
import ListarFuncionariosBox from "../../ListarFuncionariosBox/ListarFuncionariosBox.jsx";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const ListarFuncionarios = ({ nome, id, link, nomelink }) => {
    const [funcionarios, setFuncionarios] = useState([])
    useEffect(() => {
        rederizeFuncionarios()
    })
    const rederizeFuncionarios = () => {
        axios({
            method: 'get',
            url: 'http://localhost:3000/funcionarios'
        }).then(response => {
            setFuncionarios(response.data)
        })
    }

    return (
        <>
            <Header disabled="titulo" cadastro="Cadastrar">
            </Header>


            <SectionRelatorios>{funcionarios.map((funcionarios) => (
                <ListarFuncionariosBox nome={funcionarios.nomeFuncionario} id={funcionarios.id} />
            ))}</SectionRelatorios>
            <Footer />
        </>
    )
}


export default ListarFuncionarios;

