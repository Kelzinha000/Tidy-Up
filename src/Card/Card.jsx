import {BoxCard,BoxInfoCard,ImgCard,BoxImgCard,TituleCard,ConteudoCard,TextCard } from '../styled/Card.js'


const Card = ({tituloCard, textoCard,imagemCard}) => {
    return(
        <>
        <BoxCard>
            <ConteudoCard>
                <BoxImgCard>
                    <ImgCard src={imagemCard}alt="" />
                </BoxImgCard>
                <BoxInfoCard>
                    <TituleCard>{tituloCard}</TituleCard>
                    <TextCard>{textoCard}</TextCard>
                </BoxInfoCard>
            </ConteudoCard>
        </BoxCard>
        </>
    )
}

export default Card;



