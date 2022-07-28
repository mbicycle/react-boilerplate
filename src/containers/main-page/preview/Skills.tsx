import { useIsFetching } from 'react-query';
import { useEffect } from 'react';

import {
  Grid, Typography, Box,
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import SchoolIcon from '@mui/icons-material/School';

import { useUserFromDb } from '../cv-form/components/fields/personal-information/lib/query-hooks';
import theme from '../../../common/theme';
import { PaperWrapperStyled } from '../styled';

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
          <SchoolIcon color="primary" sx={{ margin: theme.spacing(1.75) }} />
        </Box>
        <Grid item xs={11}>
          <Typography
            variant="h5"
            sx={{
              marginLeft: theme.spacing(2),
              fontWeight: 'fontWeightBold',
            }}
          >
            SKILLS
          </Typography>
        </Grid>
        {data?.categories?.map((category) => (
          <Grid container sx={{ padding: theme.spacing(0, 2), margin: theme.spacing(3.75, 0, 0, 0) }}>
            <Grid item xs={12}>
              <Typography key={category.id} sx={{ fontWeight: 'fontWeightBold' }}>
                {category.name}
              </Typography>
            </Grid>
            <Grid item xs={2} />
            <Grid
              item
              xs={6}
              sx={{ textAlign: 'center' }}
            >
              <Typography variant="body1" color="text.disabled">
                Experience (years)
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{ textAlign: 'center' }}
            >
              <Typography variant="body1" color="text.disabled">
                Level
              </Typography>
            </Grid>
            {category.skills
              ?.map((skill) => skill.tools
                ?.filter((tool) => tool.name.length > 0)
                .map((tool) => (
                  <Grid container sx={{ padding: theme.spacing(0, 2) }}>
                    <Grid item xs={2}>
                      <Typography key={tool.name}>
                        <CircleIcon
                          color="primary"
                          sx={{
                            width: '0.6rem',
                            paddingTop: theme.spacing(1.5),
                            marginRight: theme.spacing(1.5),
                          }}
                        />
                        {tool.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ textAlign: 'center' }}>
                      <Typography>
                        {tool.experience}
                      </Typography>
                    </Grid>
                    <Grid item xs={4} sx={{ textAlign: 'center' }}>
                      <Typography>
                        {tool.level}
                      </Typography>
                    </Grid>
                  </Grid>
                )))}
          </Grid>
        ))}
      </Grid>
    </PaperWrapperStyled>
  );
};

export default Skills;
