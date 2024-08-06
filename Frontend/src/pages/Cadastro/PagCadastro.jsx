import { BoxCadastro, TituloCadastro, SubtitulooCadastro, BoxTitulo, SectionCadastro, BotaoVoltar, BoxBotaoVoltar, IconsNav } from '../../styled/PagCadastro.js'
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
                    <form onSubmit={handleCadastro}>
                        <input type="text" value={nomeFuncionario} onChange={(event) => setNomeFuncionario(event.target.value)} placeholder='Digite o nome do funcionario' />
                        <input type="password" value={senhaFuncionario} onChange={(event) => setSenhaFuncionario(event.target.value)} placeholder='Digite a senha do funcionario' />
                        <p>{error && <AiFillExclamationCircle></AiFillExclamationCircle>}{error}</p>
                        <button type='submit'>
                            Cadastrar
                        </button>
                    </form>
                </BoxTitulo >
            </BoxCadastro>
        </SectionCadastro>

    )
};


export default Cadastro;
