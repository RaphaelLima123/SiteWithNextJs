import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 0.4rem;
  display: flex;
  justify-content: space-between;
  color: #fff;
  flex-wrap: wrap;
  font-weight: bold;
  background-color: #202024;
  font-size: 1.4rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const ImageDiv = styled.div`
`;

// Menu Hamburguer
export const Hamburguer = styled.div`
  align-items: center;
  @media(max-width: 800px) {
    width: 40px;
    height: 30px;
    margin: 20px;
  }
`;

export const Toogle = styled.div`
    background-color: #fff;
    height: 5px;
    width: 100%;
    margin: 6px auto;
`;

export const NavigationDiv = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  transition: all ease 0.4s;
  @media (max-width: 800px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({isOpen}) => (isOpen ? "300px": "0px")}
  }
`;

export const OptionNav = styled.a`
  cursor: pointer;
  padding: 10px;
  margin: 5px;
  text-align: center;
 //Animação quando passa o mouse
  &:hover {
    border-radius: 10px;
    background: #d9d9d9;
  }
  transition: all ease 0.4s;
`;



