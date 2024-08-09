import { BoxRelatorio, SectionRelatorio, BoxConteudo, TextRelatorioVazio } from "../../styled/Home.js";
import Header from "../../Header/Header.jsx";
import Footer from "../../Footer/Footer.jsx";
import { BotaoCriar } from "../../styled/AddRelatorio.js";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { LuClipboardX } from "react-icons/lu"
import { useNavigate } from "react-router";
import '../../index.css'


const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    verificarSePossuiRelatorios()
})
const verificarSePossuiRelatorios = () =>{
  axios({
    method: 'get',
    url: 'http://localhost:3000/lerRelatorios'
}).then(response => {
    if(response.status === 201){
     return navigate("/relatorios")
    }
})
}



  return (
    <>
      <Header titulo={"Criar Relatório"}/>
      <SectionRelatorio>
        <BoxRelatorio>
          <BoxConteudo>
            <LuClipboardX className="Svg-RelatorioVazio"></LuClipboardX>
            <TextRelatorioVazio>Você ainda não apresenta nenhum relatório...</TextRelatorioVazio>
            <Link to="/addRelatorio" className="BotaoCriarRelatorio">Criar relatório</Link>
          </BoxConteudo>
        </BoxRelatorio>
      </SectionRelatorio>
      <Footer />

    </>


  );
};


export default Home;
