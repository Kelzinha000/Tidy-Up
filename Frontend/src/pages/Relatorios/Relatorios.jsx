import Header from "../../Header/Header.jsx";
import Footer from "../../Footer/Footer.jsx";
import { SectionRelatorios, ConteudoRelatorio } from "../../styled/Relatorios.js";
import BoxRelatorio from "../../RelatoriosBox/RelatorioBox.jsx";
import { IoHomeOutline } from "react-icons/io5";
import axios from "axios";
import { useEffect, useState } from "react";

const Relatorios = () => {
    const [error, setError] = useState("")
    const [ambiente, setAmbiente] = useState('')
    const [data, setData] = useState('')
    const [hora, setHora] = useState('')


    useEffect(()=>{
      rederizeRelatorio()
    })
    const rederizeRelatorio = () => {
        axios({
            method: 'get',
            url: 'http://localhost:3000/relatorios'
        }).then(response => {
            // setAmbiente(response.data[0].ambiente)
            // setData(response.data[0].data)
            // setHora(response.data[0].hora)
        //     const relatorios = response.data
        //     for (let i = 0; i < data.length; i++) {
        //    console.log(relatorios[i].ambiente)
        //    console.log(relatorios[i].ambiente)
        //    console.log(relatorios[i].hora)
        const relatorios = response.data
        for (let i = 0; i < data.length; i++){
            console.log(relatorios[i].ambiente)
            console.log(relatorios[i].data)
            console.log(relatorios[i].hora)
        }

        setAmbiente(response.data[0].ambiente)
        setData(response.data[0].data)
        setHora(response.data[0].hora)
            }

       
        )}

    return (
        <>
            <Header />
            <SectionRelatorios>

            <BoxRelatorio name="BoxRelatorio" ambiente={ambiente} date={data} time={hora} />
                {/* <p value={ambiente} onChange={(event) => setAmbiente(event.target.value)}>Ambiente</p>
                <button type="submit" onClick={(event) => rederizeRelatorio(event)}>TESTE</button> */}
                <p>{error}</p>
            </SectionRelatorios>
            <Footer />
        </>
    )
}

export default Relatorios; 