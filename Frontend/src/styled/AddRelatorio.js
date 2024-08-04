import { styled } from 'styled-components'


export const Cores = {
    cianoMedio: '#006666',
    cianoClaro: '#008584',
    branco: '#f5f5f5',
    cinza: '#cccccc',
    cianoEscuro: '#005555',
    cianoExtraEscuro: '#004141'
}


export const SectionAddRelatorio = styled.section`
justify-content: center;
display: flex;
@media screen and (max-width:1030px){
    justify-content: center;
    display: flex;
}


`


export const BoxRelatorio = styled.div`
width: 633px;
height: 573px;
margin-top: 40px;
margin-bottom : 40px;
background-color: ${Cores.branco};
box-shadow: 0 4px 50px ${Cores.cinzaSombra};
border-radius: 50px;
display: flex;
flex-direction: column;
align-items: center;
gap:20px;
text-align: center;
@media screen and (max-width:860px){
max-width: 450px;
max-height: 490px;
min-width: 0;
}


@media screen and (max-width:750px){
max-width: 340px;
max-height:403px;
gap: 10px;
}
`
export const TituloRelatorio = styled.h1`
padding: 50px;
color: ${Cores.cianoClaro};
font-size: 40px;
`

export const Select = styled.select`
color: ${Cores.cianoEscuro};
font-family: "Josefin Sans", sans-serif;
font-size: 35px;
width: 450px;
padding: 5px;
margin-bottom: 10px;
border: none;
background: transparent;
border-bottom: 3px solid ${Cores.cianoEscuro};
outline: 0;
text-align: center;
@media screen and (max-width:860px){
font-size: 30px;
width:350px
}


@media screen and (max-width:750px){
    font-size: 25px;
    width: 250px;
}
`

