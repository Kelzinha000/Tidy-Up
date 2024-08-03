import { styled } from "styled-components";


export const Cores = {
  cianoMedio: "#006666",
  cianoClaro: "#008584",
  branco: "#f5f5f5",
  cinza: "#cccccc",
  cianoEscuro: "#005555",
  cianoExtraEscuro: "#004141",
  cinzaSombra: "#0000005c",
  cinzaEscuro:"#4F4F4F"

};


export const SectionRelatorio = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 100vh;
  align-items: center;
  @media screen and (max-width: 1030px) {
    flex-direction: column;
  }
`;
export const BoxRelatorio = styled.div`
  width: 656px;
  height: 773px;
  background: ${Cores.branco};
  border-radius: 50px;
  box-shadow: 0 4px 50px ${Cores.cinzaSombra};
  border-bottom: 20px;
  margin:34px;


  @media screen and (max-width: 860px) {
    max-width: 450px;
    max-height: 490px;
    min-width: 0;
  }


  @media screen and (max-width: 750px) {
    max-width: 340px;
    max-height: 403px;
  }
`;

export const BoxConteudo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 40px;
gap: 20px;
`

export const TextRelatorioVazio = styled.h2`
color: ${Cores.cinzaEscuro};
font-family: "Josefin Sans", sans-serif;
font-size: 20px;
`




