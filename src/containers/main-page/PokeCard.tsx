import { memo, useState } from 'react';

import {
  Box, Button, Card,
  CardContent, Typography,
} from '@mui/material';

import { BUTTON_TEXT } from './utils/constants';
import PokeDetailsModal from './PokeDetails';
import { usePokeDetails } from './local-state/hooks';

const PokeCard = function ({ name, url }:{name: string, url: string}): JSX.Element {
  const [open, setOpen] = useState(false);
  const { dispatch } = usePokeDetails();
  const handleOpen = (): void => {
    dispatch({ url });
    setOpen(true);
  };
  const handleClose = (): void => {
    dispatch({ url: null });
    setOpen(false);
  };

  return (
    <>
      <Card sx={{ minWidth: 280, m: 3 }}>
        <CardContent>
          <Typography
            variant="h5"
            color="text.secondary"
            gutterBottom
          >
            {name}
          </Typography>
        </CardContent>
        <Box p={2}>
          <Button
            color="success"
            variant="contained"
            onClick={handleOpen}
          >
            {BUTTON_TEXT.DETAILS}
          </Button>
        </Box>
      </Card>
      <PokeDetailsModal
        open={open}
        closeModal={handleClose}
      />
    </>
  );
};

export default memo(PokeCard);
