import { BoxRelatorio, SectionAddRelatorio, TituloRelatorio,Select} from '../../styled/AddRelatorio.js'
import Header from '../../Header/Header.jsx';
import { IoHomeOutline } from "react-icons/io5";


const AddRelatorio = () => {
    return (
        <>
            <Header />
            <SectionAddRelatorio>
                <BoxRelatorio >
                    <TituloRelatorio>Relatório</TituloRelatorio>
                    <Select>
                      <option><IoHomeOutline></IoHomeOutline>
                        Ambiente</option>
                      <option>Banheiro</option>
                    </Select>
                    <Select>
                      <option>Data</option>
                    </Select>
                    <Select>
                      <option>Horario</option>
                    </Select>
                </BoxRelatorio  >
            </SectionAddRelatorio>
        </>
    )
}


export default AddRelatorio;