import { memo } from 'react';

import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Typography } from '@mui/material';

import { BUTTON_TEXT, TYPOGRAPHY_TEXT } from './utils/constants';

interface HeaderProps{
  loadMorePokes: () => void;
  isFetching: boolean | undefined;
  count: number;
}

const Header = function ({ loadMorePokes, isFetching, count }: HeaderProps): JSX.Element {
  return (
    <Box
      pb={2}
      display="inline-flex"
      justifyContent="space-between"
      width="100%"
      alignItems="center"
    >
      <LoadingButton
        variant="contained"
        onClick={loadMorePokes}
        loading={isFetching}
      >
        {BUTTON_TEXT.LOAD_MORE}
      </LoadingButton>
      <Typography
        color="GrayText"
        fontWeight="bold"
        variant="subtitle1"
        component="p"
      >
        {TYPOGRAPHY_TEXT.DISPLAYED_COUNT}
        {': '}
        {count}
      </Typography>
    </Box>
  );
};

export default memo(Header);
