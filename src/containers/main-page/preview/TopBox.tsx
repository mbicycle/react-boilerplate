import {
  Grid, Typography,
} from '@mui/material';

import { useIsFetching } from 'react-query';
import { useEffect } from 'react';
import { useUserFromDb } from '../cv-form/components/fields/personal-information/lib/query-hooks';
import theme from '../../../common/theme';
import {
  LogoIconStyled, GridWrapper, LogoWrapperGrid, EmailIconStyled, SkypeIconStyled, LinkWrapperGrid,
} from '../styled';

const TopBox = function (): JSX.Element {
  const { data, refetch } = useUserFromDb();
  const isFetching = useIsFetching('db-user');
  useEffect(() => {
    if (isFetching) refetch();
  }, [refetch, isFetching]);

  return (
    <GridWrapper container>
      <LogoWrapperGrid
        item
        xs={3}
      >
        <LogoIconStyled />
      </LogoWrapperGrid>
      <Grid item xs={2} />
      <LinkWrapperGrid
        item
        xs={7}
      >
        <Typography
          variant="h5"
          color="secondary.light"
          sx={{ paddingBottom: theme.spacing(1.25) }}
        >
          <EmailIconStyled />
          {data?.email}
        </Typography>
        <Typography variant="h5" color="secondary.light">
          <SkypeIconStyled />
          {data?.skype}
        </Typography>
      </LinkWrapperGrid>
    </GridWrapper>
  );
};

export default TopBox;
