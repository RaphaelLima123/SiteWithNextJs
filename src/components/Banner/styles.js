import styled from 'styled-components';
import banner from '../../assets/innovaBackground.jpg';

export const BannerContainer = styled.div`
  height: 70vh;
  width: 100%;
`;

export const BackgroundImage = styled.div`
  width: inherit;
  height: inherit;
  background-size: cover;
  background-image: url(${banner});
`;
