import { memo } from 'react';

import {
  Backdrop, Modal, Fade, Typography, List, ListItem, ListItemText,
} from '@mui/material';

import { usePokemonDetails } from './lib/query-hooks';

import { PokeDetailsStyled } from './utils/styled';

interface PokeDetailsProps {
open: boolean;
closeModal: () => void;
}

const PokeDetailsModal = function ({ open, closeModal }: PokeDetailsProps):JSX.Element {
  const { data } = usePokemonDetails();

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
            {data?.name}
          </Typography>
          <List>
            {data && data.abilities.map((item) => (
              <ListItem alignItems="flex-start">
                <ListItemText>
                  {item.ability.name}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </PokeDetailsStyled>
      </Fade>
    </Modal>
  );
};

export default memo(PokeDetailsModal);
