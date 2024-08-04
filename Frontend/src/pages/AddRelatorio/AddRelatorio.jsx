import { BoxRelatorio, SectionAddRelatorio, TituloRelatorio, Select } from '../../styled/AddRelatorio.js'
import Header from '../../Header/Header.jsx';
import { IoHomeOutline } from "react-icons/io5";
import { useState } from 'react';
import axios from 'axios';


const AddRelatorio = () => {
  const [ambiente, setAmbiente] = useState('')
  const [data, setData] = useState('')
  const [hora, setHora] = useState('')
  const [error, setError] = useState("")


  const handleForm = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/relatorio", 
        JSON.stringify({ ambiente, data, hora}), 
        {
        headers: { "Content-Type": "application/json" }
        }
      );
      console.log(response.data)
      
    } catch (error) {
      if (!error?.response) {
        setError("Erro ao acessar o site");
      }
    }
  }
  return (
    <>
      <Header />
      <SectionAddRelatorio>
        <BoxRelatorio >
          <TituloRelatorio>Relatório</TituloRelatorio>
          <form onSubmit={handleForm}>
            <Select required value={ambiente} onChange={(event) => setAmbiente(event.target.value)}>
              <option>
                <IoHomeOutline></IoHomeOutline>
                Ambiente</option>
              <option>Banheiro</option>
            </Select>
            <input type="date" name="dataRelatorio" id="dataRelatorio" required value={data} onChange={(event) => setData(event.target.value) } />
            <input type="time" name="horaRelatorio" id="horaRelatorio" required value={hora} onChange={(event) => setHora(event.target.value)} />
            <button type="submit">Enviar</button>
            <p>{error}</p>
          </form>
        </BoxRelatorio>
      </SectionAddRelatorio>
    </>
  )
}


export default AddRelatorio;