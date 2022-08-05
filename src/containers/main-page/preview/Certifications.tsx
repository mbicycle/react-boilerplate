import { useIsFetching } from 'react-query';
import { useEffect } from 'react';

import { Grid, Typography, Link } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';

import { useUserFromDb } from '../cv-form/components/fields/personal-information/lib/query-hooks';
import { CV_FORM_STEPS } from '../cv-form/utils/constants';

import {
  BoxWrapperStyled, CircleIconStyled, PaperWrapperStyled, SectionTitle,
} from '../styled';

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
      <Grid container>
        <BoxWrapperStyled>
          <ArticleIcon color="primary" sx={{ margin: (theme) => theme.spacing(1.75) }} />
        </BoxWrapperStyled>
        <Grid item xs={11}>
          <SectionTitle variant="h5">
            {CV_FORM_STEPS[4].text}
          </SectionTitle>
        </Grid>
        <Grid item xs={9} />
        <Grid
          item
          xs={3}
        >
          <Typography variant="h5" color="text.disabled">
            {CV_FORM_STEPS[4].columns[0]}
          </Typography>
        </Grid>
        {data?.certificates?.map((certificate) => (
          <Grid container sx={{ padding: (theme) => theme.spacing(0, 2) }}>
            <Grid item xs={9}>
              <Typography
                key={`${certificate.id}`}
                sx={{ paddingLeft: (theme) => theme.spacing(1.5) }}
              >
                <CircleIconStyled />
                <Link href={certificate.link}>
                  {certificate.name}
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>
                {certificate.id}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </PaperWrapperStyled>
  );
};

export default Certifications;
