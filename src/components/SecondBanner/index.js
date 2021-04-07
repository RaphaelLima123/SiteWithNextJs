import React from 'react';
import {
  SecondBannerContainer,
  SecondBannerDiv,
  SecondTextDiv,
  SecondImageDiv
} from './styles';

export default function SecondBanner() {
  return (
    <SecondBannerContainer>
      <SecondBannerDiv>
        <SecondImageDiv/>
        <SecondTextDiv/>
      </SecondBannerDiv>
    </SecondBannerContainer>
  )
}
