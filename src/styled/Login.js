import { styled } from "styled-components";

export const Cores = {
    cianoMedio:'#006666',
    cianoClaro:'#008584',
    branco:'#f5f5f5',
    cinza: '#cccccc',
    cianoEscuro:'#005555',
    cianoExtraEscuro: '#004141',
    cinzaSombra:'#0000005c'


}
export const Section1 = styled.section`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
margin-top: 90px;
margin-bottom: 50px;
@media screen and (max-width:1030px){
   flex-direction: column;
  }
`
export const ImgHomeStyle = styled.img`
//pc
max-width: 880px;
max-height: 550px;
//ipad
@media screen and (max-width:1300px){
   max-width: 760px;
   max-height: 450px;
  }
  //cell
  @media screen and (max-width:760px){
   max-width: 340px;
   max-height: 220px;
  }
`
export const ContainerLogin = styled.div`
background-color: ${Cores.branco};
width: 520px;
min-width: 320px;
height: 530px;
box-shadow: 0 4px 50px ${Cores.cinzaSombra};
border-radius: 30px;
margin: 30px;
@media screen and (max-width:860px){
   max-width: 450px;
   max-height: 490px;
   min-width: 0;
  }

@media screen and (max-width:750px){
   max-width: 340px;
   max-height:403px;
  }
`

export const TituloContainer = styled.h1`
color: ${Cores.cianoMedio};
font-family: "Josefin Sans", sans-serif;
text-align: center;
font-size: 38px;
padding: 60px;

`