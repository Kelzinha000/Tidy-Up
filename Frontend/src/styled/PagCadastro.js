
import { styled } from "styled-components";


export const Cores = {
    cianoMedio:'#006666',
    cianoClaro:'#008584',
    branco:'#f5f5f5',
    cinza: '#cccccc',
    cianoEscuro:'#005555',
    cianoExtraEscuro: '#004141',
    AzulClaro: '#CBF8FB',
    cinzaSombra:'#0000009c'
}


export const SectionCadastro = styled.section`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
/* background-image: url(./image/circulo-background.png); */
@media screen and (max-width:1030px){
   flex-direction: column;
  }
`


export const BoxCadastro = styled.div`
width: 580px;
height:567px;
box-shadow: 0 4px 50px ${Cores.cinzaSombra};
border-radius: 50px;
background-color: ${Cores.cianoExtraEscuro};


@media screen and (max-width:860px){
   width: 450px;
   height: 490px;
   min-width: 0;
  }


@media screen and (max-width:750px){
   width: 340px;
   height:403px;
  }
`
export const BoxTitulo = styled.div`
text-align: center;  
padding: 40px;
`
export const TituloCadastro = styled.h1`
font-size: 38px;`


export const SubtitulooCadastro = styled.h2`
font-weight: 200;
font-family:"Josefin Sans", sans-serif;
color: ${Cores.branco};
`

export const BotaoVoltar = styled.h1`
font-weight: 400;
font-family:"Josefin Sans", sans-serif;
color: ${Cores.branco};
`

export const BoxBotaoVoltar = styled.div`
display: flex;
align-items: center;
position: fixed;
top: 60px;
left: 40px;
`

export const IconsNav = styled.img`
height: 25px;
width: 20px;
padding: 0;
`



