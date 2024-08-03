import { BoxCadastro, TituloCadastro, SubtitulooCadastro, BoxTitulo, SectionCadastro, BotaoVoltar, BoxBotaoVoltar, IconsNav} from '../../styled/PagCadastro.js'
import IconVoltar from "../../image/Icons/IconVoltar.png"

const Cadastro = () => {

    return (
     
            <SectionCadastro>
           <BoxBotaoVoltar>
            <IconsNav src={IconVoltar} alt="" />
            <BotaoVoltar>Voltar</BotaoVoltar>
           </BoxBotaoVoltar>
                <BoxCadastro>
                    <BoxTitulo >
                        <TituloCadastro>Cadastro</TituloCadastro>
                        <SubtitulooCadastro>Funcionários</SubtitulooCadastro>
                    </BoxTitulo >
                </BoxCadastro>
            </SectionCadastro>
         
    )
};


export default Cadastro;
