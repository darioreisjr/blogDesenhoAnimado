import React from "react";
import ImgPerfil from "../../img/perfilautor.png";
import ImgPerfil1 from "../../img/perfilautor1.png";
import ImgPerfil2 from "../../img/perfilautor2.png";

import {
  Container,
  ImgCard,
  ConteudoCard,
  DescricaoCard,
  TagCard,
  TituloCard,
  ConteudoCardPerfil,
  PerfilAutor,
  PerfilData,
  PerfilImg,
  BoxDados,
  Card,
  Box,
} from "./styles";

import CardImg from "../../img/imagemCard.png";
import CardImg1 from "../../img/imagemCard1.png";
import CardImg2 from "../../img/imagemCard2.png";
import CardImg3 from "../../img/imagemCard3.png";
import CardImg4 from "../../img/imagemCard4.png";
import CardImg5 from "../../img/imagemCard5.png";
import CardImg6 from "../../img/imagemCard6.png";

export default function Main({ variant = "primary" }) {
  return (
    <Container>
      <Box variant={variant}>
        <Card variant={variant}>
          <ImgCard src={CardImg} variant={variant} />
          <ConteudoCard variant={variant}>
            <TagCard>Fantasia</TagCard>
            <TituloCard variant={variant}>
              I can't risk this Reality on a promise. It is the duty of the
              Sorcerer Supreme to protect the Time Stone.
            </TituloCard>
            <DescricaoCard variant={variant}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </DescricaoCard>
            <ConteudoCardPerfil>
              <PerfilImg src={ImgPerfil} />
              <BoxDados>
                <PerfilAutor>Mohammad Reza</PerfilAutor>
                <PerfilData>Jul 09, 2021</PerfilData>
              </BoxDados>
            </ConteudoCardPerfil>
          </ConteudoCard>
        </Card>
      </Box>

      <Box>
        <Card>
          <ImgCard src={CardImg1} />
          <ConteudoCard>
            <TagCard>Fantasia</TagCard>
            <TituloCard>
              In times of crisis, wise men build bridges, while fools build
              walls.
            </TituloCard>
            <DescricaoCard>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </DescricaoCard>
            <ConteudoCardPerfil>
              <PerfilImg src={ImgPerfil} />
              <BoxDados>
                <PerfilAutor>Mohammad Reza</PerfilAutor>
                <PerfilData>Jul 09, 2021</PerfilData>
              </BoxDados>
            </ConteudoCardPerfil>
          </ConteudoCard>
        </Card>

        <Card>
          <ImgCard src={CardImg2} />
          <ConteudoCard>
            <TagCard>Fantasia</TagCard>
            <TituloCard>
              Only you can decide what kind of king you will be.
            </TituloCard>
            <DescricaoCard>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </DescricaoCard>
            <ConteudoCardPerfil>
              <PerfilImg src={ImgPerfil1} />
              <BoxDados>
                <PerfilAutor>Albert Orion</PerfilAutor>
                <PerfilData>Mai 15, 2021</PerfilData>
              </BoxDados>
            </ConteudoCardPerfil>
          </ConteudoCard>
        </Card>

        <Card>
          <ImgCard src={CardImg3} />
          <ConteudoCard>
            <TagCard>Fantasia</TagCard>
            <TituloCard>Great powers bring great responsibilities.<br/><br/></TituloCard>
            <DescricaoCard>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </DescricaoCard>
            <ConteudoCardPerfil>
              <PerfilImg src={ImgPerfil2} />
              <BoxDados>
                <PerfilAutor>Angélika Johnson</PerfilAutor>
                <PerfilData>Jan 08, 2021</PerfilData>
              </BoxDados>
            </ConteudoCardPerfil>
          </ConteudoCard>
        </Card>
      </Box>

      <Box>
        <Card>
          <ImgCard src={CardImg4} />
          <ConteudoCard>
            <TagCard>Fantasia</TagCard>
            <TituloCard>
              We are who we choose to be... <br /> So choose!
            </TituloCard>
            <DescricaoCard>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </DescricaoCard>
            <ConteudoCardPerfil>
              <PerfilImg src={ImgPerfil1} />
              <BoxDados>
                <PerfilAutor>Albert Orion</PerfilAutor>
                <PerfilData>Dez 27, 2020</PerfilData>
              </BoxDados>
            </ConteudoCardPerfil>
          </ConteudoCard>
        </Card>

        <Card>
          <ImgCard src={CardImg5} />
          <ConteudoCard>
            <TagCard>Fantasia</TagCard>
            <TituloCard>
              Sometimes life sucks, but it's always worth living!
            </TituloCard>
            <DescricaoCard>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </DescricaoCard>
            <ConteudoCardPerfil>
              <PerfilImg src={ImgPerfil2} />
              <BoxDados>
                <PerfilAutor>Angélika Johnson</PerfilAutor>
                <PerfilData>Out 15, 2020</PerfilData>
              </BoxDados>
            </ConteudoCardPerfil>
          </ConteudoCard>
        </Card>

        <Card>
          <ImgCard src={CardImg6} />
          <ConteudoCard>
            <TagCard>Fantasia</TagCard>
            <TituloCard>
              We all have secrets, the ones we hide and the ones they keep from
              us.
            </TituloCard>
            <DescricaoCard>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </DescricaoCard>
            <ConteudoCardPerfil>
              <PerfilImg src={ImgPerfil} />
              <BoxDados>
                <PerfilAutor>Mohammad Reza</PerfilAutor>
                <PerfilData>Set 02, 2020</PerfilData>
              </BoxDados>
            </ConteudoCardPerfil>
          </ConteudoCard>
        </Card>
      </Box>
    </Container>
  );
}
