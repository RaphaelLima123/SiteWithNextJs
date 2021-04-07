import styled from 'styled-components';
import {FacebookCircle} from '@styled-icons/boxicons-logos/FacebookCircle'
import {Instagram} from '@styled-icons/boxicons-logos/Instagram'
import logo from '../../assets/logoPredio.png';

export const FooterContainer = styled.div`
  display: flex;
  padding: 2%;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  height: 30vh;
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  background-color: #202024;
  overflow: hidden;

  @media (max-width: 800px){
    font-size: 1rem;
  }
`;

export const SocialMediasDiv = styled.div`
  display: flex;
`;



export const ImageDiv = styled.div`
  width: 145px;
  height: 145px;
  background-image: url(${logo});
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 510px){
    display: none;
    font-size: 1rem;
  }
`;

export const IconsTitle = styled.h1`
  font-size: 1.5rem;
  color: #ff8a2f;
  @media (max-width: 510px){
    font-size: 1rem;
  }
`;

export const IconsDiv = styled.div`
@media (max-width: 510px){
    font-size: 1rem;
  }
`;
export const FaceIcon = styled(FacebookCircle)`
  cursor: pointer;
  margin: 5px;
  width: 35px;
  height: 35px;
`;

export const InstaIcon = styled(Instagram)`
  cursor: pointer;
  margin: 5px;
  width: 35px;
  height: 35px;
`;

export const PagesDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PagesOption = styled.a`
  width: 100%;
  cursor: pointer;
  padding: 5px;
  margin: 2px;
  text-align: center;
  font-size: 1.5rem;
 //Animação quando passa o mouse
  &:hover {
    color: #d9d9d9;
  }
  transition: all ease 0.4s;

  @media (max-width: 510px){
    font-size: 1rem;
  }
`;

export const MapDiv = styled.div`
  display: none;
  height: 100%;
  background-color: #8844ee;
`;


