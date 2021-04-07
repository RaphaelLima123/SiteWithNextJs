import styled from 'styled-components';

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

//PARTE ESQUERDA DO BANNER

export const ServiceBannerContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  color: #626c84;
  font-size: 2rem;
  text-align: center;
  background-color: #fff;
  justify-content: space-between;
`;

export const LeftDiv = styled.div`
  width: 50%;
  padding: 2%;
  margin: 2%;
`;

export const LeftTitle = styled.h1`
  color: #252a37;
  font-size: 2rem;
  padding: 1%;
  margin: 1%;
  @media(max-width: 1080px) {
    font-size: 1.5rem;
  }
`;

export const LeftText = styled.h3`
  font-size: 1.5rem;
  padding: 1%;
  margin: 1%;
  @media(max-width: 1080px) {
    font-size: 1.0rem;
  }
`;

export const IconsDiv = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
  flex-direction: row;
  color: #ff8a2f;
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
export const RightDiv = styled.div``;
