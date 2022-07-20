import {
  Grid, Typography,
} from '@mui/material';

import { useIsFetching } from 'react-query';
import { useEffect } from 'react';
import { useUserFromDb } from '../cv-form/components/fields/personal-information/lib/query-hooks';
import LogoIcon from '../../../common/icons/LogoIcon';
import EmailIcon from '../../../common/icons/EmailIcon';
import SkypeIcon from '../../../common/icons/SkypeIcon';

const TopBox = function (): JSX.Element {
  const { data, refetch } = useUserFromDb();
  const isFetching = useIsFetching('db-user');
  useEffect(() => {
    if (isFetching) { refetch(); }
  }, [refetch, isFetching]);

  return (

    <Grid
      container
      spacing={0}
      sx={{
        height: '16.8rem',
        backgroundColor: 'primary.main',
      }}
    >
      <Grid
        item
        xs={4}
        sx={{

          paddingTop: '2.8rem',
          paddingLeft: '2.4rem',
        }}
      >

        <LogoIcon style={{
          width: '12rem',
          height: '2.8rem',
          margin: '1rem',
          fill: 'secondary',
        }}
        />
      </Grid>
      <Grid item xs={2} />
      <Grid
        item
        xs={6}
        sx={{
          paddingTop: '2rem',
          paddingRight: '2.4rem',
        }}
      >
        <Typography variant="h5" color="secondary.light" noWrap>
          <EmailIcon sx={{
            width: '1.6rem',
            marginRight: '1.4rem',
            paddingTop: '0.5rem',
          }}
          />
          {data?.email}
        </Typography>
        <Typography variant="h5" color="secondary.light">
          <SkypeIcon sx={{
            width: '1.6rem',
            marginRight: '1.4rem',
            paddingTop: '0.5rem',
          }}
          />
          {data?.skype}
        </Typography>
      </Grid>
    </Grid>

  );
};
export default TopBox;
