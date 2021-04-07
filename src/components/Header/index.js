import React, { useState } from 'react';
import {
  NavigationDiv,
  OptionNav,
  ImageDiv,
  Hamburguer,
  Toogle,
  HeaderContainer,
} from './styles';
import Image from 'next/image';
import logo from '../../assets/innovabh.png';

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <HeaderContainer>
        <ImageDiv>
          <Image
            src={logo}
            alt="Logo"
            width={202}
            height={70}
          />
        </ImageDiv>
        <Hamburguer onClick={handleClick}>
          <Toogle/>
          <Toogle/>
          <Toogle/>
        </Hamburguer>
        <NavigationDiv isOpen={isOpen}>
          <OptionNav>Ínicio</OptionNav>
          <OptionNav>Sobre nós</OptionNav>
          <OptionNav>Serviços</OptionNav>
          <OptionNav>Contato</OptionNav>
        </NavigationDiv>
    </HeaderContainer>
  )
}
