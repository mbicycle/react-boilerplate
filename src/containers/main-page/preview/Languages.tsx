import {
  Grid, Typography, Paper, Box,
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useIsFetching } from 'react-query';
import { useEffect } from 'react';
import { useUserFromDb } from '../cv-form/components/fields/personal-information/lib/query-hooks';
import RatingLanguage from './RatingLanguage';

const Languages = function (): JSX.Element {
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
        margin: '18px 24px 0',
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
          <MenuBookIcon color="primary" sx={{ margin: '0.7rem' }} />
        </Box>
        <Grid item xs={11}>
          <Typography
            variant="h5"
            sx={{
              marginLeft: '0.8rem',
              fontWeight: 'fontWeightBold',
            }}
          >
            LANGUAGES
          </Typography>
        </Grid>
        <Grid item xs={8} />
        <Grid
          item
          xs={4}
          sx={{ textAlign: 'center' }}
        >
          <Typography variant="h5" color="text.disabled">
            Level
          </Typography>
        </Grid>
        {data?.languages?.map((language) => (
          <Grid container sx={{ padding: '0 8px' }}>
            <Grid item xs={2}>
              <Typography key={language.name} sx={{ paddingLeft: '6px' }}>
                <CircleIcon
                  color="primary"
                  sx={{
                    width: '6px',
                    paddingTop: '6px',
                    marginRight: '6px',
                  }}
                />
                {language.name}
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ margin: 'auto' }}>
              <RatingLanguage level={language.level} />
            </Grid>
            <Grid item xs={4} sx={{ textAlign: 'center' }}><Typography>{language.level}</Typography></Grid>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};
export default Languages;
