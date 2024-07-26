import { Rodape, BoxNav, BoxFooter, SocialMidia, LinksSocial, ImgIconsSocial, TextFooter } from "../styled/Footer.js"
import ImgInstagram from '../image/Img-Instagram.png'
import ImgWhatsApp from '../image/Img-WhatsApp.png'
import ImgGitHub from '../image/Img-GitHub.png'

const Footer = () => {
  return (
    <Rodape>
      <BoxFooter>
        <BoxNav>
          <TextFooter>Navegue por aqui:</TextFooter>
        </BoxNav>
        <SocialMidia>
          <LinksSocial href="#"> <ImgIconsSocial src={ImgInstagram} alt="Logo do Instagram" /></LinksSocial>
          <LinksSocial href="#"> <ImgIconsSocial src={ImgWhatsApp} alt="Logo do Instagram" /></LinksSocial>
          <LinksSocial href="#"><ImgIconsSocial src={ImgGitHub} alt="Logo do Instagram" /></LinksSocial>
        </SocialMidia>
      </BoxFooter>
      <TextFooter>Todos os direitos reservados ©️</TextFooter>
    </Rodape>
  )
}

export default Footer; 