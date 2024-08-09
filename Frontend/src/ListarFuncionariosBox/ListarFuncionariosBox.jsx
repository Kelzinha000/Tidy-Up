import { NomeFuncionario, IdFuncionario, BoxListarFuncionarios } from "../styled/ListarFuncionariosBox";

const ListarFuncionariosBox = ({ nome, id }) => {
    return (
        <BoxListarFuncionarios>
            <NomeFuncionario>Nome Funcionario: {nome}</NomeFuncionario>
            <IdFuncionario>Id do Funcionario: {id}</IdFuncionario>
        </BoxListarFuncionarios>
    )
}

export default ListarFuncionariosBox;