import { useIsFetching } from 'react-query';
import { useEffect } from 'react';

import {
  Grid, Typography, Box,
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useUserFromDb } from '../cv-form/components/fields/personal-information/lib/query-hooks';

import RatingLanguage from './RatingLanguage';
import theme from '../../../common/theme';
import { PaperWrapperStyled } from '../styled';

const Languages = function (): JSX.Element {
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
          <MenuBookIcon color="primary" sx={{ margin: theme.spacing(1.75) }} />
        </Box>
        <Grid item xs={11}>
          <Typography
            variant="h5"
            sx={{
              marginLeft: theme.spacing(2),
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
          <Grid container sx={{ padding: theme.spacing(0, 1.25) }}>
            <Grid item xs={2}>
              <Typography key={language.name} sx={{ paddingLeft: theme.spacing(1.5) }}>
                <CircleIcon
                  color="primary"
                  sx={{
                    width: '6px',
                    paddingTop: theme.spacing(1.5),
                    marginRight: theme.spacing(1.5),
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
    </PaperWrapperStyled>
  );
};

export default Languages;
