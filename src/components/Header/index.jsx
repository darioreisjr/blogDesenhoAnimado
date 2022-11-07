import React from "react";
import { FaSearch } from "react-icons/fa";

import {
  ButtonContato,
  Logo,
  Container,
  BoxLogoContato,
  BoxCentral,
  ContainerInput,
  InputPesquisa,
  BoxFinal,
  ItemMenu,
  Menu,
} from "./styles";
export default function Header() {
  return (
    <Container>
      <BoxLogoContato>
        <Logo>Blog</Logo>
        <ButtonContato
          onClick={() => {
            alert("Entaremos em contato em breve");
          }}
        >
          Contato
        </ButtonContato>
      </BoxLogoContato>

      <BoxCentral>
        <ContainerInput>
          <InputPesquisa placeholder="Pesquisar" />
        </ContainerInput>
      </BoxCentral>

      <BoxFinal>
        <Menu>
          <ItemMenu>Todos</ItemMenu>
          <ItemMenu>Fantasia</ItemMenu>
          <ItemMenu>NFT</ItemMenu>
          <ItemMenu>HQ</ItemMenu>
          <ItemMenu>Animes</ItemMenu>
          <ItemMenu>Jogos</ItemMenu>
          <ItemMenu>Tecnologia</ItemMenu>
        </Menu>
      </BoxFinal>
    </Container>
  );
}
