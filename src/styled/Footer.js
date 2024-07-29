import { styled } from "styled-components";

export const Cores = {
  cianoMedio: '#006666',
  cianoClaro: '#008584',
  branco: '#f5f5f5',
  cinza: '#cccccc',
  cianoEscuro: '#005555',
  cianoExtraEscuro: '#004141'


}


export const Rodape = styled.footer`
background-color: ${Cores.cianoClaro};
height: 250px;
width: 100;
padding: 15px;
display: flex;
flex-direction: column;
margin-top: 100px;
`

export const BoxFooter = styled.div`
background-color: ${Cores.cianoEscuro};
height: 200px;
border-radius: 15px;
justify-content: space-around;
display: flex;
align-items: center;
@media screen and (max-width:770px){
   flex-direction: column;
  }


`
export const BoxNav = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 10px;
padding: 10px;
`
export const LinksFooter = styled.a`
color: ${Cores.cinza};
text-decoration: none;
font-family: "Josefin Sans", sans-serif;
font-size: 15px;
@media screen and (max-width:950px){
 display: none;
  }
  &:hover{
    color: ${Cores.cinzaEscuro};
    }
`
export const SocialMidia = styled.div`
background-color: ${Cores.cianoExtraEscuro};
max-width: 672px;
min-width:150px ;
height: 60px;
border-radius: 10px;
display: flex;
align-items: center;
`

export const LinksSocial = styled.a`

`
export const ImgIconsSocial = styled.img`
height: 35px;
padding: 10px;
transition: 0.5s;
&:hover{
  transform: scale(1.1);
}
`

export const TextFooter = styled.h3`
color: ${Cores.branco};
text-align: center;
font-size: 20px;
font-family: "Josefin Sans", sans-serif;
font-weight: 500;
padding-top: 20px;
@media screen and (max-width:950px){
 display: none;
  }
`

export const CopyRigth = styled.h3`
color: ${Cores.branco};
text-align: center;
font-size: 20px;
font-family: "Josefin Sans", sans-serif;
font-weight: 500;
padding-top: 20px;
`


