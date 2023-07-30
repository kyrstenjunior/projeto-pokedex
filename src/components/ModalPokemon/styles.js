import styled from "styled-components";
import { useMediaQuery } from "@mui/material";

// Style for MUI
export const boxModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 310,
  bgcolor: '#2E2D2D',
  border: '2px solid #000',
  color: 'white',
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
};

export const TitleModal = {
  fontSize: "30px",
  textTransform: "capitalize",
  textAlign: "center",
  mb: 3
};

export const TypeModal = {
  fontSize: "25px",
  textAlign: "center",
  mt: 3
};

// Style for Styled-Components
export const ImagemModal = styled.img`
  width: 120px;
`;
