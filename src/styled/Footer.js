import { styled } from "styled-components";

export const Cores = {
    cianoMedio:'#006666',
    cianoClaro:'#008584',
    branco:'#f5f5f5',
    cinza: '#cccccc',
    cianoEscuro:'#005555',
    cianoExtraEscuro: '#004141'


}


export const Rodape = styled.footer`
background-color: ${Cores.cianoClaro};
height: 300px;
width: 100;
padding: 15px;
display: flex;
flex-direction: column;
`

export const BoxFooter = styled.div`
background-color: ${Cores.cianoEscuro};
height: 250px;
border-radius: 15px;
justify-content: space-around;
display: flex;
align-items: center;
@media screen and (max-width:770px){
   flex-direction: column;
  }


`
export const BoxNav = styled.div`

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
`

export const TextFooter = styled.h3`
color: ${Cores.branco};
text-align: center;
font-size: 20px;
font-family: "Josefin Sans", sans-serif;
font-weight: 500;
padding: 25px;
`