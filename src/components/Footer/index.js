import React from 'react';
import {
  FaceIcon,
  FooterContainer,
  IconsDiv,
  IconsTitle,
  ImageDiv,
  InstaIcon,
  MapDiv,
  PagesDiv,
  PagesOption,
  SocialMediasDiv,
} from './styles';
import Image from 'next/image';


export default function Footer () {
  return (
    <FooterContainer>
      <SocialMediasDiv>
        <ImageDiv/>
        <IconsDiv>
          <IconsTitle>Nos siga nas redes sociais!</IconsTitle>
          <FaceIcon/>
          <InstaIcon/>
        </IconsDiv>
      </SocialMediasDiv>
      <PagesDiv>
        <PagesOption> Sobre nós</PagesOption>
        <PagesOption> Serviços</PagesOption>
        <PagesOption> Contato</PagesOption>
        <PagesOption> Orçamento</PagesOption>
      </PagesDiv>
      <MapDiv>MAPA DO GOOGLE AQUI</MapDiv>
    </FooterContainer>
  )
}
