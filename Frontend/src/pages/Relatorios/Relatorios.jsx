import Header from "../../Header/Header.jsx";
import Footer from "../../Footer/Footer.jsx";
import { SectionRelatorios } from "../../styled/Relatorios.js";
import BoxRelatorio from "../../RelatoriosBox/RelatorioBox.jsx";
import axios from "axios";
import { useState } from "react";

const Relatorios = () => {
    const [error, setError] = useState("")
    const [ambiente, setAmbiente] = useState('')
    const [data, setData] = useState('')
    const [hora, setHora] = useState('')


    const rederizeRelatorio = () => {
        axios({
            method: 'get',
            url: 'http://localhost:3000/relatorios'
        }).then(response => {
            const relatorios = response.data
            for (let i = 0; i < relatorios.length; i++) {
                console.log(relatorios[i])
            }

        })
    }

    return (
        <>
            <Header />
            <SectionRelatorios>
                <BoxRelatorio name="BoxRelatorio" ambiente="Ambiente" date="Data" time="Horario" />
                <p value={ambiente} onChange={(event) => setAmbiente(event.target.value)}>Ambiente</p>
                <button type="submit" onClick={(event) => rederizeRelatorio(event)}>TESTE</button>
                <p>{error}</p>
            </SectionRelatorios>
            <Footer />
        </>
    )
}

export default Relatorios; 