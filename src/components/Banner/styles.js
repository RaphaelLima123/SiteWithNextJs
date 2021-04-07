import styled from 'styled-components';
import banner from '../../assets/innovaBackground.jpg';

export const BannerContainer = styled.div`
  height: 91vh;
  width: 100%;
  align-items: center;
  color: #fff;
  background-image: url(${banner});
  background-size: cover;
`;

export const BannerDiv = styled.div`
  display: block;
  flex-direction: column;
  text-align: center;
  padding: 10%;
  position: relative;
  top: 15%;

  @media (max-width: 390px) {
    top: 8%;

    @media (max-width: 390px) {
    top: 15%;
  }
  }
`;

export const BackgroundDiv = styled.div`
  background-color: #fff;
  opacity: 0.8;
`;

export const BannerTittle = styled.h1`
  font-size: 3rem;

  @media (max-width: 466px) {
    font-size: 2.0rem;
  }

  @media (max-width: 370px) {
    font-size: 1.8rem;
  }
`;

export const BannerSubtitle = styled.h1`
  font-size: 3rem;

  @media (max-width: 466px) {
    font-size: 2.0rem;
  }

  @media (max-width: 370px) {
    font-size: 1.8rem;
  }
`;

export const NavDiv = styled.nav`
  display: flex;
  font-size: 2rem;
  margin: 2.5%;
  align-items: center;
  justify-content: center;

  @media (max-width: 466px) {
    font-size: 1.5rem;
    margin: 15%;
  }
  @media (max-width: 370px) {
    font-size: 1.5rem;
    margin: 20%;
  }

`;

export const BannerButton = styled.a`
  cursor: pointer;
  padding: 2.0%;
  color: #fff;
  background-color: #ff8a2f;
  font-weight: bold;
  transition: all ease 0.4s;

  &:hover{
    background-color: #d9d9d9;
  }
`;


