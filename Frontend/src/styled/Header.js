import { styled } from "styled-components";

export const Cores = {
    cianoMedio: '#006666',
    cianoClaro: '#008584',
    branco: '#f5f5f5',
    cinza: '#cccccc',
    cianoEscuro: '#005555',
    cianoExtraEscuro: '#004141',
    cinzaEscuro: '#404040',
    cinzaSombra: '#0000005c'


}

export const HeaderNav = styled.header`
display: flex;
gap: 70px;
padding: 30px;
position:sticky;
top:0;
justify-content: center;
z-index:99;

`
export const Nav = styled.nav`
background-color: ${Cores.branco};
box-shadow: 4px 4px 10px #0000008a ;
border: ${Cores.cinza} 1px solid;
height: 70px;
width: 1299px;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: end;
gap: 60px;
padding-right: 60px;


`

export const LogoBox = styled.div`
background-color: ${Cores.branco};
box-shadow: 4px 4px 10px #0000005a;
border: ${Cores.cinza} 1px solid;
width: 232px;
height: 70px;
border-radius: 10px;
display: flex;
align-items: center;
`
export const Logo = styled.img`
height: 60px;
width: 160px;
padding: 25px;
display: flex;


@media screen and (max-width:950px){
  display: none;
  }
`
export const LogoMobile = styled.img`
height: 60px;
width: 60px;
padding: 25px;
display: none;

@media screen and (max-width:950px){
   display: flex;
  }

`

export const LogoNavMobile = styled.img`
height: 60px;
width: 160px;
padding: 25px;
position: fixed;
bottom: 0;

`


export const ContainerNav = styled.div`
height:100vh;
width:300px;
position:fixed;
top:0;
right:0;
display:none;
background-color:#006666;
box-shadow:0 0 20px 3px;
z-index:80;
animation: mostrarnavbar .4s;
@keyframes mostrarnavbar {
    from {
        opacity: 0;
        width:0;
    } to {
        opacity: 1;
        width: 300px;
    }
}

@media screen and (max-width:950px){
   display: flex;
  }
`
export const BackgroundNavMobile = styled.div`
background-color: ${Cores.cinzaSombra};
width: 100vh;
height: 100vh;
position: fixed;
z-index: 70;
top: 0;
`

export const ContentLinks = styled.div`
width: 100;
margin-top:100px;
display: flex;
flex-direction: column;
gap: 20px;
`


export const LinksNavMobile = styled.a`
width: 100vh;
color: ${Cores.branco};
text-decoration: none;
font-family: "Josefin Sans", sans-serif;
font-size: 25px;
padding: 15px;
`

export const LinksNav = styled.a`
color: ${Cores.cianoEscuro};
text-decoration: none;
font-family: "Josefin Sans", sans-serif;
font-size: 25px;
@media screen and (max-width:950px){
   display: none;
  }

  &::after{
    content:"";
    display: block;
    width: 0;
    height: 3px;
    background-color: ${Cores.cianoClaro};
    transition: .3s ease-out;
  }

  &:hover::after{
    width: 100%;
  }

  &:hover{
    color: ${Cores.cinzaEscuro};
    }
`

export const BoxLink = styled.div`
align-items: center;
padding: 15px;
transition: .2s;
width: 100vh;
border-radius: 0 0 0 20px;
&:hover{
    background-color: ${Cores.cianoEscuro};
    color: ${Cores.cinza};
}
`

export const IconsNav = styled.img`
height: 23px;
width: 23px;
`





