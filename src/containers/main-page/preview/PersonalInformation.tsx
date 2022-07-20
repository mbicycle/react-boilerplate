import {
  Grid, Typography, Paper,
} from '@mui/material';
import { useIsFetching } from 'react-query';
import { useEffect } from 'react';
import { useUserPhoto } from 'common/services/user-service/hooks/useUserPhoto';
import { useUserFromDb } from '../cv-form/components/fields/personal-information/lib/query-hooks';
import { ImageStyled } from '../cv-form/components/fields/personal-information/styled';

const PersonalInformation = function (): JSX.Element {
  const { data, refetch } = useUserFromDb();
  const { photo } = useUserPhoto();
  const isFetching = useIsFetching('db-user');
  useEffect(() => {
    if (isFetching) { refetch(); }
  }, [refetch, isFetching]);
  return (
    <Paper
      elevation={2}
      sx={{
        maxWidth: '100%',
        margin: '0 2.4rem',
        padding: '1.6rem',
        borderRadius: '0.2rem',
      }}
    >
      <Grid
        container
        spacing={2}
      >
        <Grid item xs={2}>
          <ImageStyled
            referrerPolicy="no-referrer"
            alt="User"
            src={photo}
            sx={{
              width: '6.8rem',
              height: '7.2rem',
            }}

          />
        </Grid>
        <Grid item xs={7}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 'fontWeightBold' }}
          >
            {data?.firstName}
            {' '}
            {data?.lastName}
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: 'fontWeightLight' }}
          >
            тут должность
          </Typography>
        </Grid>
        <Grid item xs={3} sx={{ textAlign: 'center' }}>
          <Typography
            variant="h3"
            align="center"
            color="primary.main"
          >
            10+
          </Typography>
          <Typography
            variant="caption"
            align="center"
          >
            Work Experience
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" fontWeight="fontWeightBold">
            SUMMARY OF QUALIFICATION
          </Typography>
          <Typography
            variant="body2"
            color="text.disabled"
          >
            {data?.summary}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default PersonalInformation;
