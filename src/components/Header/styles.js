import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: #ff7a00;
`;

export const MenuContainer = styled.div`
  font-size: 1.3rem;
  display: flex;
  width: 90%;
  max-width: 980;
  justify-content: space-between;
  margin: auto;
  height: auto;
  color: #fff;
  font-weight: bold;
`;

export const ImageDiv = styled.div`
  margin: 5px;
  display: flex;
  align-items: center;
`;

export const ButtonsDiv = styled.nav`
  display: flex;
  align-items: center;

  @media(max-width: 800px) {
    display: none;
  }
`;

export const ButtonDiv = styled.a`
  cursor: pointer;
  padding: 10px 10px 10px 10px;
  text-align: center;
  &:hover {
    color: #f58634;
  }
  transition: all ease 0.4s;
`;

export const ButtonToogle = styled.div`
  @media(max-width: 800px) {
    width: 40px;
    height: 30px;;
    margin: 20px;
  }
`;

export const Toogle = styled.div`
  @media(max-width: 800px) {
    background-color: #fff;
    height: 5px;
    width: 100%;
    margin: 6px auto;
  }
`;




