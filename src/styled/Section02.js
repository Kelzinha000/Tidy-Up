import { styled } from "styled-components";

export const Cores = {
    cianoMedio:'#006666',
    cianoClaro:'#008584',
    branco:'#f5f5f5',
    cinza: '#cccccc',
    cianoEscuro:'#005555',
    cianoExtraEscuro: '#004141',
    AzulClaro: '#CBF8FB',
    cinzaSombra:'#0000004c'


}


export const Section2 = styled.section`
margin-top: 90px;
padding: 200px;
background-color: ${Cores.cinzaSombra};
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
@media screen and (max-width:770px){
   flex-direction: column;
   gap: 100px;
  }
`