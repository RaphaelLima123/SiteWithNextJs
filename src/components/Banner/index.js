import React from 'react';
import {
  BackgroundImage,
  BannerButton,
  BannerContainer,
  BannerDiv,
  BannerTittle,
  BannerSubtitle,
  NavDiv
} from './styles';

export default function Banner() {
  return (
    <BannerContainer>
        <BannerDiv>
            <BannerTittle>Seu condomínio precisa de ajuda?</BannerTittle>
            <BannerSubtitle>A INNOVA tem a solução</BannerSubtitle>
          <NavDiv>
            <BannerButton>QUERO UM ORÇAMENTO</BannerButton>
          </NavDiv>
        </BannerDiv>
    </BannerContainer>
  );
}
