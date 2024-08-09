import { styled } from "styled-components"

export const Cores = {
  cianoMedio: '#006666',
  cianoClaro: '#008584',
  branco: '#f5f5f5',
  cinza: '#cccccc',
  cianoEscuro: '#005555',
  cianoExtraEscuro: '#004141',
  cinzaSombra: '#0000009c',
  vermelhoError: '#cc1818',
  cinzaEscuro: '#1C1C1C'
}

export const BoxListarFuncionarios = styled.div`
background-color: ${Cores.branco};
border-radius: 20px;
height: 70px;
width: 55%;
padding: 20px;
align-items: start;
box-shadow:10px 10px 50px ${Cores.cinzaSombra};
transition: .5s;
&:hover{
    transform: scale(1.03);
    box-shadow:10px 10px 50px ${Cores.cinzaEscuro}
}
`
export const NomeFuncionario = styled.p`
font-family: "Josefin Sans", sans-serif;
font-size: 25px;
@media screen and (max-width:770px){
font-size: 20px;
  }
`

export const IdFuncionario = styled.p`
font-family: "Josefin Sans", sans-serif;
font-size: 15px;
@media screen and (max-width:770px){
font-size: 15px;
  }
`