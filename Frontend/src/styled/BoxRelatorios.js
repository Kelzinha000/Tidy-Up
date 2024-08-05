import { styled } from "styled-components"

export const Cores = {
    cianoMedio: '#006666',
    cianoClaro: '#008584',
    branco: '#f5f5f5',
    cinza: '#cccccc',
    cianoEscuro: '#005555',
    cianoExtraEscuro: '#004141',
    cinzaSombra: '#0000009c',
    vermelhoError: '#cc1818'
}


export const BoxRelatorio = styled.div`
background-color: ${Cores.branco};
border-radius: 20px;
box-shadow:10px 10px 50px ${Cores.cinzaSombra};
`
  
export const NomeAmbiente = styled.p`
font-family: "Josefin Sans", sans-serif;
`

export const TimeRelatorio = styled.p`
font-family: "Josefin Sans", sans-serif;
`

export const DateRelatorio =  styled.p`
font-family: "Josefin Sans", sans-serif;
`
