import {
  Grid, Typography, Paper, Box,
} from '@mui/material';
import { useIsFetching } from 'react-query';
import { useEffect } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import SchoolIcon from '@mui/icons-material/School';
import { useUserFromDb } from '../cv-form/components/fields/personal-information/lib/query-hooks';

const Skills = function (): JSX.Element {
  const { data, refetch } = useUserFromDb();
  const isFetching = useIsFetching('db-user');
  useEffect(() => {
    if (isFetching) { refetch(); }
  }, [refetch, isFetching]);
  return (
    <Paper
      elevation={1}
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
          <SchoolIcon color="primary" sx={{ margin: '0.7rem' }} />
        </Box>
        <Grid item xs={11}>
          <Typography
            variant="h5"
            sx={{
              marginLeft: '0.8rem',
              fontWeight: 'fontWeightBold',
            }}
          >
            SKILLS
          </Typography>
        </Grid>

        {data?.categories?.map((category) => (
          <Grid container sx={{ padding: '0 0.8rem', margin: '1.5rem 0 0 0' }}>
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
                  <Grid container sx={{ padding: '0 0.8rem' }}>
                    <Grid item xs={2}>
                      <Typography key={tool.name}>
                        <CircleIcon
                          color="primary"
                          sx={{
                            width: '0.6rem',
                            paddingTop: '0.6rem',
                            marginRight: '0.6rem',
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
    </Paper>
  );
};
export default Skills;
