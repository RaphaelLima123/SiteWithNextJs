import styled from 'styled-components';

export const ContainerServices = styled.div`
  margin: auto;
  height: 70vh;
  width: 90%;
  max-width: 980;

  @media(max-width: 700px) {
  }
`;

export const ServicesDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  width: 70%;
  padding: 2%;
  margin: auto;

  @media(max-width: 480) {
    flex-direction: column;
    position: relative;
  }
`;

export const ServiceDiv = styled.div`
  background: #ff7a00;
  padding: 10px;
  border-radius: 10px;
`;

export const ServiceTitle = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 1.5rem;
`;

export const ServiceText = styled.h3`
  color: #000000;
  text-align: center;
  font-size: 1.2rem;
`;


