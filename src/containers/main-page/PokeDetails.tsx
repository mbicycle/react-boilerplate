import { memo } from 'react';

import {
  Backdrop, Modal, Fade, Typography,
} from '@mui/material';

import { PokeDetailsStyled } from './utils/styled';

interface PokeDetailsProps {
open: boolean;
closeModal: () => void;
}

const PokeDetails = function ({ open, closeModal }: PokeDetailsProps):JSX.Element {
  return (
    <Modal
      open={open}
      onClose={closeModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <PokeDetailsStyled>
          <Typography id="spring-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="spring-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </PokeDetailsStyled>
      </Fade>
    </Modal>
  );
};

export default memo(PokeDetails);
