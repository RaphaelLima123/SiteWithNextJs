import React from 'react';
import {
  MenuContainer,
  ButtonsDiv,
  ButtonDiv,
  ImageDiv,
  ButtonToogle,
  Toogle,
  HeaderContainer
} from './styles';
import Image from 'next/image'
import logo from '../../assets/innovabh.png';

export default function Header() {
  return (
    <HeaderContainer>
      <MenuContainer>
      <ImageDiv>
        <Image
          src={logo}
          alt="Logo"
          width={202}
          height={70}
        />
      </ImageDiv>
      <ButtonToogle>
          <Toogle/>
          <Toogle/>
          <Toogle/>
        </ButtonToogle>
      <ButtonsDiv>
        <ButtonDiv>Ínicio</ButtonDiv>
        <ButtonDiv>Sobre nós</ButtonDiv>
        <ButtonDiv>Serviços</ButtonDiv>
        <ButtonDiv>Contato</ButtonDiv>
      </ButtonsDiv>
    </MenuContainer>
  </HeaderContainer>
  )
}
