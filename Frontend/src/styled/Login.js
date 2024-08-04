import { styled } from "styled-components";

export const Cores = {
  cianoMedio: '#006666',
  cianoClaro: '#008584',
  branco: '#f5f5f5',
  cinza: '#cccccc',
  cianoEscuro: '#005555',
  cianoExtraEscuro: '#004141',
  cinzaSombra: '#0000009c',
  vermelhoError:'#cc1818'


}
export const Section1 = styled.section`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
margin-top: 50px;
margin-bottom: 50px;
padding: 30px;
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
`

export const FormularioLogin = styled.form`
display: flex;
flex-direction: column;
padding: 50px;
gap: 20px;
`
export const InputLogin = styled.input`
height: 45px;
border:  none;
border-bottom: solid 3px ${Cores.cianoClaro};
outline:0;
background-color: transparent;
font-family: "Josefin Sans", sans-serif;
font-weight: 200;
font-size: 15px;
`

export const BotaoEntrar = styled.button`
 background-image: linear-gradient(to right,${Cores.cianoClaro}, ${Cores.cianoEscuro}); 
 color: ${Cores.branco};
 font-family: "Josefin Sans", sans-serif;
 border: none;
 padding: 15px;
 border-radius: 30px;
 font-size: 20px;
 transition: 5s;
 &:hover{
  background-image: linear-gradient(to right, ${Cores.cinza}, ${Cores.cinzaSombra}); 
 }
`

export const ErroLogin = styled.p`
color: ${Cores.vermelhoError};
font-family: "Josefin Sans", sans-serif;
display: flex;
align-items: center;
gap: 5px;
`