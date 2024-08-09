import Card from "../Card/Card.jsx";
import ImageLogin from '../image/Ilustration/img-Login.png'
import ImageEnvie from '../image/Ilustration/img-Envie.png'
import ImageCrie from '../image/Ilustration/img-Crie.png'

import { Section2 } from '../styled/Section02.js'

const Section02 = ({ tituloCard, textoCard, imagemCard, descricaoImg}) => {
    return (
        <Section2 id="Section-02">
            <Card tituloCard="Login" textoCard="Faça login e matenha suas atividades atualizadas para análise do seu supervisor." imagemCard={ImageLogin} descricaoImg="Mulher no celular fazendo login" />

            <Card tituloCard="Crie relatórios" textoCard="Crie relatórios diários de maneira fácil sobre os ambientes higienizados." imagemCard={ImageCrie} descricaoImg= "Um homem sentado preenchendo formulário no papel"/>

            <Card tituloCard="Envie" textoCard="Envie os relatórios para seu supervisor com apenas um clique." imagemCard={ImageEnvie} descricaoImg="Uma mão segurando o celular e a outra apertando o botão de enviar mensagem " />
        </Section2>
    )
}

export default Section02;