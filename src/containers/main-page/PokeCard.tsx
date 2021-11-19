import { memo, useState } from 'react';

import {
  Box, Button, Card,
  CardContent, Typography,
} from '@mui/material';

import { BUTTON_TEXT } from './utils/constants';
import PokeDetails from './PokeDetails';

const PokeCard = function ({ name, url }:{name: string, url: string}): JSX.Element {
  const [open, setOpen] = useState(false);
  const handleOpen = (): void => { setOpen(true); };
  const handleClose = (): void => { setOpen(false); };

  return (
    <>
      <Card sx={{ minWidth: 280, m: 3 }} key={url}>
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
      <PokeDetails
        open={open}
        closeModal={handleClose}
      />
    </>
  );
};

export default memo(PokeCard);
