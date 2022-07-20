import {
  Grid, Typography, Paper, Link, Box,
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { useIsFetching } from 'react-query';
import { useEffect } from 'react';
import ArticleIcon from '@mui/icons-material/Article';
import { useUserFromDb } from '../cv-form/components/fields/personal-information/lib/query-hooks';

const Certifications = function (): JSX.Element {
  const { data, refetch } = useUserFromDb();
  const isFetching = useIsFetching('db-user');
  useEffect(() => {
    if (isFetching) { refetch(); }
  }, [refetch, isFetching]);
  return (
    <Paper
      elevation={2}
      sx={{
        maxWidth: '100%',
        padding: '1.6rem',
        margin: '1.8rem 2.4rem 0',
        borderRadius: '0.2rem',
      }}
    >
      <Grid
        container
        spacing={1}
      >
        <Box
          sx={{
            width: '3rem',
            height: '3rem',
            backgroundColor: 'secondary.main',
            borderRadius: '50%',

          }}
        >
          <ArticleIcon color="primary" sx={{ margin: '0.7rem' }} />
        </Box>
        <Grid item xs={11}>
          <Typography
            variant="h5"
            sx={{
              marginLeft: '0.8rem',
              fontWeight: 'fontWeightBold',
            }}
          >
            CERTIFICATIONS
          </Typography>
        </Grid>
        <Grid item xs={8} />
        <Grid
          item
          xs={4}
          sx={{ textAlign: 'center' }}
        >
          <Typography variant="h5" color="text.disabled" align="center">
            Date
          </Typography>
        </Grid>
        {data?.certificates?.map((certificate) => (
          <Grid container sx={{ padding: '0 0.8rem' }}>
            <Grid item xs={8}>
              <Typography
                key={`${certificate.id}`}
                sx={{ paddingLeft: '0.6rem' }}
              >
                <CircleIcon
                  color="primary"
                  sx={{
                    width: '0.6rem',
                    paddingTop: '0.6rem',
                    marginRight: '0.6rem',
                  }}
                />
                <Link href={certificate.link}>
                  {certificate.name}
                </Link>

              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ textAlign: 'center' }}><Typography>{certificate.id}</Typography></Grid>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};
export default Certifications;
