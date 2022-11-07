import styled, { css } from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #F5F5F5;
  gap: 40px;
  max-width: 1200px;
`;

export const Box = styled.section`
  

  ${({ variant }) =>
    variant !== "primary" &&
    css`
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

    `}
`;

export const Card = styled.div`
  display: flex;

  ${({ variant }) =>
    variant !== "primary" &&
    css`
      display: flex;
      flex-direction: column;
      max-width: 359px;
    `}
`;

export const ImgCard = styled.img`
  width: 50%;
  height: 50%;
  max-width: 507px;
  max-height: 372px;

  ${({ variant }) =>
    variant !== "primary" &&
    css`
      width: 100%;
      max-width: 359px;
      max-height: 271px;
    `}
`;

export const ConteudoCard = styled.article`
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${({ variant }) =>
    variant !== "primary" &&
    css`
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    `}
`;

export const TagCard = styled.p`
  color: #46adfa;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 600;
`;

export const TituloCard = styled.h2`
  color: #190f8b;
  font-family: "Poppins", sans-serif;
  font-size: 25px;
  font-weight: 600;

  ${({ variant }) =>
    variant !== "primary" &&
    css`
      color: #190f8b;
      font-family: "Poppins", sans-serif;
      font-size: 14px;
      font-weight: 600;
    `}
`;

export const DescricaoCard = styled.p`
  color: #8c98aa;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 300;

  ${({ variant }) =>
    variant !== "primary" &&
    css`
      color: #8c98aa;
      font-family: "Poppins", sans-serif;
      font-size: 12px;
      font-weight: 300;
    `}
`;

export const ConteudoCardPerfil = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const PerfilImg = styled.img`
  max-width: 62px;
  max-height: 62px;
`;
export const BoxDados = styled.div`
  padding: 20px;
`;

export const PerfilAutor = styled.h5`
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: #190f8b;
`;

export const PerfilData = styled.p`
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: #8c98aa;
`;
