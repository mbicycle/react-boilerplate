import { useIsFetching } from 'react-query';
import { useEffect } from 'react';

import {
  Grid, Typography, Link, Box,
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import ArticleIcon from '@mui/icons-material/Article';

import { useUserFromDb } from '../cv-form/components/fields/personal-information/lib/query-hooks';
import theme from '../../../common/theme';
import { PaperWrapperStyled } from '../styled';

const Certifications = function (): JSX.Element {
  const { data, refetch } = useUserFromDb();
  const isFetching = useIsFetching('db-user');

  useEffect(() => {
    if (isFetching) refetch();
  }, [refetch, isFetching]);

  return (
    <PaperWrapperStyled
      elevation={1}
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
          <ArticleIcon color="primary" sx={{ margin: theme.spacing(1.75) }} />
        </Box>
        <Grid item xs={11}>
          <Typography
            variant="h5"
            sx={{
              marginLeft: theme.spacing(1.75),
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
          <Grid container sx={{ padding: theme.spacing(0, 2) }}>
            <Grid item xs={8}>
              <Typography
                key={`${certificate.id}`}
                sx={{ paddingLeft: theme.spacing(1.5) }}
              >
                <CircleIcon
                  color="primary"
                  sx={{
                    width: '0.6rem',
                    paddingTop: theme.spacing(1.5),
                    marginRight: theme.spacing(1.5),
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
    </PaperWrapperStyled>
  );
};

export default Certifications;
