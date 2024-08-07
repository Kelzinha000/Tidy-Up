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

export const SectionPerfil = styled.section`
display:flex;
justify-content: center;
align-items: center;
height: 100vh;
margin-top: 10px;
margin-bottom: 60px;
`

export const BoxPerfil = styled.div`
width: 70%;
height: 500px;
box-shadow: 0 4px 50px ${Cores.cinzaEscuro};
border-radius: 50px;
background-color: ${Cores.cianoExtraEscuro};
`

export const BoxConteudoFuncionario = styled.div`
padding: 20px;
display: flex;
flex-direction: row;
gap: 30px;
align-self: center;
width: 100;
margin: 20px;
border-bottom: 2px solid ${Cores.branco};
`

export const InfoFuncionario = styled.div`
display:flex;
flex-direction: column;
`

export const BoxHistoriocoRelatorios = styled.div`
display: flex;
flex-direction: column;
`

export const NomeFuncionario = styled.h2`
color: ${Cores.branco};
font-family: "Josefin Sans", sans-serif;
`

export const CPFuncionario = styled.h2`
 font-family: "Josefin Sans", sans-serif;
 color: ${Cores.branco};
`

export const ImgPerfil = styled.img`
max-width: 200px;
padding:20px;
`