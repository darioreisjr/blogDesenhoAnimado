import styled from "styled-components";

import img from "../../img/fundoCabecalho.png";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  background-color: #F5F5F5;
`;

export const BoxLogoContato = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 60px;
`;

export const Logo = styled.h1`
  color: #1627c3;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: 35px;
  text-transform: uppercase;
`;

export const ButtonContato = styled.button`
  min-width: 175px;
  max-width: 320px;
  min-height: 60px;
  max-height: 120px;

  background-color: #3347c5;
  color: #ffffff;

  font-weight: 400;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  line-height: 30px;

  border: none;
  border-radius: 50px;

  :hover {
    
  }
`;

export const BoxCentral = styled.div`
  height: 300px;
  width: 1250px;
  margin: 0 auto;
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ContainerInput = styled.div`
  max-width: 571px;
  height: 70px;
  margin: 0 auto;
  margin-top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.div`
  margin-right: 10px;
`;

export const InputPesquisa = styled.input`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 15px;

  ::placeholder {
    color: #8c98aa;
    font-size: 18px;
    font-family: "Roboto", sans-serif;
  }
`;

export const BoxFinal = styled.div`
  padding: 15px;
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

export const ItemMenu = styled.li`
  list-style: none;
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: #8c98aa;
  padding: 10px;

  :hover {
    background-color: #3347c5;
    color: #ffffff;
    padding: 10px;
    border-radius: 25px;
  }
`;
