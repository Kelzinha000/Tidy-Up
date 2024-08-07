import Header from "../../Header/Header.jsx";
import Footer from "../../Footer/Footer.jsx";
import { SectionRelatorios, ConteudoRelatorio } from "../../styled/Relatorios.js";
import BoxRelatorio from "../../RelatoriosBox/RelatorioBox.jsx";
import axios from "axios";
import { useEffect, useState } from "react";


const ListarFuncionarios = ({nome, id}) => {
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
            <Header />
            <SectionRelatorios>{funcionarios.map((funcionarios) => (
                <BoxRelatorio />
            ))}</SectionRelatorios>
            <Footer />
        </>
    )
}


export default ListarFuncionarios;

