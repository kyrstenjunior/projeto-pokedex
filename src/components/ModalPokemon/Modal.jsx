import { Modal, Typography, Box } from "@mui/material";
import * as S from "./styles";

const ModalWindow = ({open, close, pokemon, img, type}) => {

  return (
    <>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={S.boxModal}>
            <Typography id="modal-modal-title" sx={S.TitleModal}>
              {pokemon}
            </Typography>
            <S.ImagemModal src={img} />
            <Typography id="modal-modal-description" sx={S.TypeModal}>
              {type}
            </Typography>
          </Box>
      </Modal>
    </>
  )
}

export default ModalWindow