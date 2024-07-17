import { styled } from "styled-components";

export const Cores = {
    cianoEcuro:'#006666',
    cianoClaro:'#008584',
    branco:'#f5f5f5',
    cinza: '#cccccc'


}

export const HeaderNav = styled.header`
display: flex;
gap: 70px;
padding: 30px;
justify-content:center;
`
export const Nav = styled.nav`
background-color: ${Cores.branco};
box-shadow: 4px 4px 10px #0000005a ;
border: ${Cores.cinza} 1px solid;
height: 70px;
width: 1299px;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: end;
gap: 40px;
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

@media screen and (max-width:770px){
   display: flex;
  }
`
export const Content = styled.div`
margin-top:100px`


