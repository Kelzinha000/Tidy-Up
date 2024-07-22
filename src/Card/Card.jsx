import {BoxCard,BoxInfoCard,ImgCard,BoxImgCard,TituleCard,ConteudoCard,TextCard } from '../styled/Card.js'

import ImageCard from '../image/Ilustration/Img-Card1.png'

const Card = ({tituloCard, textoCard}) => {
    return(
        <>
        <BoxCard>
            <ConteudoCard>
                <BoxImgCard>
                    <ImgCard src={ImageCard} alt="" />
                </BoxImgCard>
                <BoxInfoCard>
                    <TituleCard>Login</TituleCard>
                    <TextCard>Faça login e matenha suas atividades atualizadas para análise do seu supervisor </TextCard>
                </BoxInfoCard>
            </ConteudoCard>
        </BoxCard>
        </>
    )
}

export default Card;



