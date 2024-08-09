import Header from "../../Header/Header.jsx";
import Footer from "../../Footer/Footer.jsx";
import { SectionRelatorios, ConteudoRelatorio } from "../../styled/Relatorios.js";
import BoxRelatorio from "../../RelatoriosBox/RelatorioBox.jsx";
import axios from "axios";
import { useEffect, useState } from "react";


const Relatorios = ({ ambiente, date, time }) => {
    const [relatorio, setRelatorio] = useState([])
    useEffect(() => {
        rederizeRelatorio()
    })
    const rederizeRelatorio = () => {
        axios({
            method: 'get',
            url: 'http://localhost:3000/relatorios'
        }).then(response => {
            setRelatorio(response.data)
        })
    }

    return (
        <>
            <Header titulo={"Criar Relatório"} />
            <SectionRelatorios>{relatorio.map((relatorio) => (
                <BoxRelatorio ambiente={relatorio.ambiente} date={relatorio.data} time={relatorio.hora} />
            ))}</SectionRelatorios>
            <Footer />
        </>
    )
}


export default Relatorios;

