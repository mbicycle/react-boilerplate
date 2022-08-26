import { useIsFetching } from 'react-query';
import { useEffect } from 'react';

import { v4 as uuid4 } from 'uuid';

import { Grid, Typography } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import { useUserFromDb } from '../cv-form/components/fields/personal-information/lib/query-hooks';
import { CV_FORM_STEPS } from '../cv-form/utils/constants';

import RatingLanguage from './RatingLanguage';

import {
  BoxWrapperStyled, CircleIconStyled, PaperWrapperStyled, SectionTitle,
} from '../styled';

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
      <Grid container>
        <BoxWrapperStyled>
          <MenuBookIcon color="primary" />
        </BoxWrapperStyled>
        <Grid item xs={11}>
          <SectionTitle variant="h5">
            {CV_FORM_STEPS[1].text}
          </SectionTitle>
        </Grid>
        <Grid item xs={9} />
        <Grid
          item
          xs={3}
        >
          <Typography variant="h5" color="text.disabled">
            {CV_FORM_STEPS[1].columns[0]}
          </Typography>
        </Grid>
        {data?.languages?.map((language) => (
          <Grid container sx={{ padding: (theme) => theme.spacing(0, 1.25) }} key={language.name}>
            <Grid item xs={2}>
              <Typography sx={{ paddingLeft: (theme) => theme.spacing(1.5) }}>
                <CircleIconStyled />
                {language.name}
              </Typography>
            </Grid>
            <Grid item xs={7} sx={{ margin: 'auto' }}>
              <RatingLanguage level={language.level} />
            </Grid>
            <Grid item xs={3}>
              <Typography>
                {language.level}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </PaperWrapperStyled>
  );
};

export default Languages;
