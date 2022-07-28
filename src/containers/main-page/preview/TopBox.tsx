import {
  Grid, Typography,
} from '@mui/material';

import { useIsFetching } from 'react-query';
import { useEffect } from 'react';
import { useUserFromDb } from '../cv-form/components/fields/personal-information/lib/query-hooks';
import LogoIcon from '../../../common/icons/LogoIcon';
import EmailIcon from '../../../common/icons/EmailIcon';
import SkypeIcon from '../../../common/icons/SkypeIcon';
import theme from '../../../common/theme';

const TopBox = function (): JSX.Element {
  const { data, refetch } = useUserFromDb();
  const isFetching = useIsFetching('db-user');
  useEffect(() => {
    if (isFetching) { refetch(); }
  }, [refetch, isFetching]);

  return (
    <Grid
      container
      sx={{
        height: '16.8rem',
        backgroundColor: 'primary.main',
      }}
    >
      <Grid
        item
        xs={4}
        sx={{
          paddingTop: theme.spacing(7),
          paddingLeft: theme.spacing(6),
        }}
      >
        <LogoIcon
          style={{
            width: '12rem',
            height: '2.8rem',
            fill: 'secondary',
          }}
        />
      </Grid>
      <Grid item xs={2} />
      <Grid
        item
        xs={6}
        sx={{
          paddingTop: theme.spacing(5),
          paddingRight: theme.spacing(6),
        }}
      >
        <Typography
          variant="h5"
          color="secondary.light"
          noWrap
          sx={{ paddingBottom: theme.spacing(1.25) }}
        >
          <EmailIcon sx={{
            width: '1.6rem',
            marginRight: theme.spacing(3.5),
            paddingTop: theme.spacing(1.25),
          }}
          />
          {data?.email}
        </Typography>
        <Typography variant="h5" color="secondary.light">
          <SkypeIcon sx={{
            width: '1.6rem',
            marginRight: theme.spacing(3.5),
            paddingTop: theme.spacing(1.25),
          }}
          />
          {data?.skype}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TopBox;
