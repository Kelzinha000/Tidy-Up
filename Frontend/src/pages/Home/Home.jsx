import { BoxRelatorio, SectionRelatorio, BoxConteudo, TextRelatorioVazio } from "../../styled/Home.js";
import Header from "../../Header/Header.jsx";
import Footer from "../../Footer/Footer.jsx";
import { LuClipboardX } from "react-icons/lu"
import '../../index.css'


const Home = () => {
  return (
    <>
      <Header />
      <SectionRelatorio>
        <BoxRelatorio>
          <BoxConteudo>
            <LuClipboardX className="Svg-RelatorioVazio"></LuClipboardX>
            <TextRelatorioVazio>Você ainda não apresenta nenhum relatório...</TextRelatorioVazio>
          </BoxConteudo>
        </BoxRelatorio>
      </SectionRelatorio>
      <Footer />

    </>


  );
};


export default Home;
