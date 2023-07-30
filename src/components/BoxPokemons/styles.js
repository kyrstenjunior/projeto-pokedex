import styled from "styled-components";

// Box Pokémons
export const ContainerBox = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 100%;
  background-color: #202124;
  border-radius: 8px;
  padding: 32px;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 32px;

  @media screen and (max-width: 1260px){
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 980px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 700px){
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 400px){
    padding: 32px 5px;
  }
`;

// Header
export const ContainerHeader = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0 32px 0;
`;

export const UpMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  @media screen and (max-width: 440px){
    justify-content: center;
  }
`;

export const Logo = styled.img`
  width: 217px;
`;

export const ColoredBalls = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${props => props.backgroundColor};
  margin: 0 8px;

  &:hover{
    opacity: .5;
  }

  @media screen and (max-width: 440px){
    display: none;
  }
`;

export const Formulario = styled.form`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 440px){
    flex-direction: column;
    gap: 12px;
  }
`;

export const Search = styled.input`
  height: 40px;
  width: 100%;
  border: none;
  border-radius: 8px;
  background-color: #202124;
  color: #fff;
  padding-left: 12px;
  font-weight: bold;
  font-size: 16px;

  &:focus{
    outline: none;
  }
`;

export const Submit = styled.input`
  height: 40px;
  max-width: 112px;
  width: 100%;
  margin-left: 12px;
  color: #fff;
  background-color: #27A9FC;
  border: 3px solid #fff;
  font-weight: bold;
  border-radius: 8px;
  font-size: 18px;
  transition: 0.5s;

  &:hover{
    background-color: #3D7F47;
  }

  @media screen and (max-width: 440px){
    max-width: none;
    margin-left: 0;
  }
`;