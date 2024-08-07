import { BoxCadastro, TituloCadastro, SubtitulooCadastro, BoxTitulo, SectionCadastro,ErroCadastro, FormularioCadastro, InputCadastro, BotaoCadastrar,  BotaoVoltar, BoxBotaoVoltar, IconsNav } from '../../styled/PagCadastro.js'
import IconVoltar from "../../image/Icons/IconVoltar.png"
import { useState } from 'react';
import { AiFillExclamationCircle } from "react-icons/ai";
import axios from 'axios';

const Cadastro = () => {
    const [nomeFuncionario, setNomeFuncionario] = useState('')
    const [senhaFuncionario, setSenhaFuncionario] = useState('')
    const [error, setError] = useState("")

    const handleCadastro = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:3000/cadastrar",
                JSON.stringify({ nomeFuncionario, senhaFuncionario }),
                {
                    headers: { "Content-Type": "application/json" }
                }
            );
        } catch (error) {
            if (!error?.response) {
                setError("Erro ao acessar o site");
            } else if (error.response.status === 401) {
                setError("Campos vazios, preecha os campos");
            }
        }
    }


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
                    <FormularioCadastro onSubmit={handleCadastro}>
                        <InputCadastro type="text" value={nomeFuncionario} onChange={(event) => setNomeFuncionario(event.target.value)} placeholder='Digite o nome do funcionario' />
                        <InputCadastro type="password" value={senhaFuncionario} onChange={(event) => setSenhaFuncionario(event.target.value)} placeholder='Digite a senha do funcionario' />
                        <ErroCadastro>{error && <AiFillExclamationCircle></AiFillExclamationCircle>}{error}</ErroCadastro>
                        <BotaoCadastrar type='submit'>
                            Cadastrar
                        </BotaoCadastrar>
                    </FormularioCadastro>
                </BoxTitulo >
            </BoxCadastro>
        </SectionCadastro>

    )
};


export default Cadastro;
