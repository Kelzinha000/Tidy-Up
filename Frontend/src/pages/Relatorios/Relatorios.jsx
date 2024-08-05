import Header from "../../Header/Header.jsx";
import Footer from "../../Footer/Footer.jsx";
import { SectionRelatorios } from "../../styled/Relatorios.js";
import BoxRelatorio  from "../../RelatoriosBox/RelatorioBox.jsx";
const Relatorios = ({ambiente, date, time }) => {
    return(
<>
<Header/>
<SectionRelatorios>
<BoxRelatorio ambiente="Ambiente" date="Data" time="Horario"/>
</SectionRelatorios>
<Footer/>
</>
    )
}

export default Relatorios; 