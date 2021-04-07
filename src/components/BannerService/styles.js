import styled from 'styled-components';
import build from '../../assets/build.png';

//ICONES DO BANNER

import {Building} from '@styled-icons/fa-regular/Building';
import {AttachMoney} from '@styled-icons/material/AttachMoney';
import {Computer} from '@styled-icons/material/Computer';

export const IconBuild = styled(Building)`
  padding: 2%;
  margin: 2%;
  height: 150px;
  width: 150px;
`;
export const IconCoin = styled(AttachMoney)`
  padding: 2%;
  margin: 2%;
  height: 150px;
  width: 150px;
`;
export const IconNet = styled(Computer)`
  padding: 2%;
  margin: 2%;
  height: 150px;
  width: 150px;
`;

// DIV DO BANNER

export const ServiceBannerContainer = styled.div`
  display: flex;
  width: 100%;
  color: #626c84;
  font-size: 2rem;
  text-align: center;
  background-color: #fff;
  justify-content: space-between;
  overflow: hidden;
  padding: 2%;

  @media (max-width: 1250px) {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
`;

//PARTE ESQUERDA DO BANNER

export const LeftDiv = styled.div`
  padding: 2%;
  margin: 2%;
`;

export const LeftTitle = styled.h1`
  color: #252a37;
  font-size: 2rem;
  padding: 1%;
  margin: 1%;

  @media(max-width: 1250px) {
    font-size: 1.5rem;
  }
  @media(max-width: 1080px) {
    font-size: 1.5rem;
  }
`;

export const LeftText = styled.h3`
  font-size: 1.5rem;
  padding: 1%;
  margin: 1%;

  @media(max-width: 1250px) {
    font-size: 1.3rem;
  }

  @media(max-width: 1080px) {
    font-size: 1.3rem;
  }
`;

export const IconsDiv = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
  flex-direction: row;
  color: #ff8a2f;

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
  }
`;

export const IconDiv = styled.div`
  text-align: center;
  padding: 2%;
  margin: 2%;
`;

export const IconsTitle = styled.h1`
  font-size: 1.5rem;
`;
//PARETE DIREITA DO BANNER
export const RightDiv = styled.div`
  align-items: center;
  justify-content: center;
  width: 70%;
  padding: 2%;
  margin: 2%;
  opacity: 0.8;

  @media (max-width: 1250px) {
    width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;
  }
`;

export const ImageDiv = styled.div`
  justify-content: center;
  margin: auto;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url(${build});
  background-size: cover;
  background-position: center;
`;
