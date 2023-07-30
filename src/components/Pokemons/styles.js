import styled from "styled-components";

export const Card = styled.div`
  width: 280px;
  height: 328px;
  padding: 38px 45px;
  background-color: #2E2D2D;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  transition: 0.7s;

  &:hover{
    border: 1px solid #ccc;
    scale: 1.03;
  }

  @media screen and (max-width: 350px){
    width: 240px;
    height: 281px;
  }

`;

export const Imagem = styled.img`
  width: 120px;

  @media screen and (max-width: 350px){
    width: 100px;
  }
`;

export const NamePokemon = styled.h2`
  color: #fff;
  font-size: 28px;
  text-transform: capitalize;

  @media screen and (max-width: 350px){
    font-size: 24px;
  }
`;