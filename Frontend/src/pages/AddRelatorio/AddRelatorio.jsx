import { BoxRelatorio, SectionAddRelatorio, TituloRelatorio, Select, FormularioRelatorio, Date , Time, BotaoCriar} from '../../styled/AddRelatorio.js'
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
          <FormularioRelatorio onSubmit={handleForm}>
            <Select required value={ambiente} onChange={(event) => setAmbiente(event.target.value)}>
              <option>
                <IoHomeOutline></IoHomeOutline>
                Ambiente</option>
              <option>Banheiro</option>
            </Select>
            <Date type="date" name="dataRelatorio" id="dataRelatorio" required value={data} onChange={(event) => setData(event.target.value) } />
            <Time type="time" name="horaRelatorio" id="horaRelatorio" required value={hora} onChange={(event) => setHora(event.target.value)} />
            <p>{error}</p>
            <BotaoCriar type="submit">Enviar</BotaoCriar>
          </FormularioRelatorio>
        </BoxRelatorio>
      </SectionAddRelatorio>
    </>
  )
}


export default AddRelatorio;