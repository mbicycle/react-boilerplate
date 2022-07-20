import { Paper, Grid } from '@mui/material';
import TopBox from './TopBox';
import PersonalDetails from './PersonalDetails';

const Wrapper = function (): JSX.Element {
  return (

    <Paper
      elevation={6}
      sx={{
        maxWidth: '100%',
        paddingBottom: '4.8rem',
        borderRadius: '0.2rem',
      }}
    >
      <Grid
        container
      >
        <Grid item xs={12}>
          <TopBox />
        </Grid>
        <Grid item sx={{ marginTop: '-8rem', zIndex: '20' }}>
          <PersonalDetails />
        </Grid>

      </Grid>
    </Paper>
  );
};
export default Wrapper;
