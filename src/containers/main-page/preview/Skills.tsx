import { useIsFetching } from 'react-query';
import { useEffect } from 'react';

import { v4 as uuid4 } from 'uuid';

import { Grid, Typography } from '@mui/material';

import { useUserFromDb } from '../cv-form/components/fields/personal-information/lib/query-hooks';
import { CV_FORM_STEPS } from '../cv-form/utils/constants';

import {
  PaperWrapperStyled, BoxWrapperStyled, CircleIconStyled,
  SectionTitle, SkillsGrid, SchoolIconStyled,
} from '../styled';

const Skills = function (): JSX.Element {
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
          <SchoolIconStyled />
        </BoxWrapperStyled>
        <Grid item xs={11}>
          <SectionTitle variant="h5">
            {CV_FORM_STEPS[2].text}
          </SectionTitle>
        </Grid>
        {data?.categories?.map((category) => (
          <SkillsGrid container key={uuid4()}>
            <Grid item xs={12}>
              <Typography sx={{ fontWeight: 'fontWeightBold' }}>
                {category.name}
              </Typography>
            </Grid>
            <Grid item xs={2} />
            <Grid
              item
              xs={7}
            >
              <Typography variant="body1" color="text.disabled">
                {CV_FORM_STEPS[2].columns[0]}
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
            >
              <Typography variant="body1" color="text.disabled">
                {CV_FORM_STEPS[2].columns[1]}
              </Typography>
            </Grid>
            {category.skills
              ?.map((skill) => skill.tools
                ?.filter((tool) => tool.name.length > 0)
                .map((tool) => (
                  <Grid container sx={{ padding: (theme) => theme.spacing(0, 2) }} key={uuid4()}>
                    <Grid item xs={2}>
                      <Typography>
                        <CircleIconStyled />
                        {tool.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <Typography>
                        {tool.experience}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography>
                        {tool.level}
                      </Typography>
                    </Grid>
                  </Grid>
                )))}
          </SkillsGrid>
        ))}
      </Grid>
    </PaperWrapperStyled>
  );
};

export default Skills;
