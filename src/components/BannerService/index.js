import React from 'react';
import {
  IconDiv,
  IconsDiv,
  IconBuild,
  IconCoin,
  IconNet,
  IconsTitle,
  LeftDiv,
  LeftText,
  LeftTitle,
  ServiceBannerContainer ,
  RightDiv,
} from './styles';
import { TextServiceBanner } from '../../assets/texts'

export default function BannerService() {
  return (
    <ServiceBannerContainer>
      <LeftDiv>
        <LeftTitle>{TextServiceBanner.text1}</LeftTitle>
        <LeftText>{TextServiceBanner.text2}</LeftText>
        <LeftText>{TextServiceBanner.text3}</LeftText>
        <IconsDiv>
          <IconDiv>
            <IconsTitle>Estrutura própria</IconsTitle>
            <IconBuild/>
          </IconDiv>
          <IconDiv>
            <IconsTitle>Sem taxas absurdas</IconsTitle>
            <IconCoin/>
          </IconDiv>
          <IconDiv>
            <IconsTitle>Tudo digital</IconsTitle>
            <IconNet/>
          </IconDiv>
        </IconsDiv>
      </LeftDiv>
      <RightDiv>

      </RightDiv>
    </ServiceBannerContainer>
  )
}
