import { Rodape, BoxNav, BoxFooter, SocialMidia, LinksSocial, ImgIconsSocial, TextFooter, LinksFooter, CopyRigth } from "../styled/Footer.js"
import ImgInstagram from '../image/Img-Instagram.png'
import ImgWhatsApp from '../image/Img-WhatsApp.png'
import ImgGitHub from '../image/Img-GitHub.png'

const Footer = () => {
  return (
    <Rodape id="footer">
      <BoxFooter>
        <BoxNav>
          <TextFooter>Navegue por aqui:</TextFooter>
          <LinksFooter href="#">Home</LinksFooter>
          <LinksFooter href="#Section-02">Sobre</LinksFooter>
          <LinksFooter href="#footer">Contato</LinksFooter>
          <LinksFooter href="#">Login</LinksFooter>
        </BoxNav>
        <SocialMidia>
          <LinksSocial href="#"> <ImgIconsSocial src={ImgInstagram} alt="Logo do Instagram" /></LinksSocial>
          <LinksSocial href="#"> <ImgIconsSocial src={ImgWhatsApp} alt="Logo do Instagram" /></LinksSocial>
          <LinksSocial href="#"><ImgIconsSocial src={ImgGitHub} alt="Logo do Instagram" /></LinksSocial>
        </SocialMidia>
      </BoxFooter>
      <CopyRigth>Todos os direitos reservados ©️</CopyRigth>
    </Rodape>
  )
}

export default Footer; 