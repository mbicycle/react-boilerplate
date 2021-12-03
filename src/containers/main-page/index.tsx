import { Grid } from '@mui/material';
import Stepper from './stepper';

export const MainPage = function (): JSX.Element {
  return (
    <Grid container>
      <Grid item xs={6} sx={{ padding: '4rem 6rem' }}>
        <Stepper />
      </Grid>
      <Grid item xs={6} sx={{ backgroundColor: '#F6F7F9', borderRadius: '4px' }}>
        Here will be an
        Preview
      </Grid>
    </Grid>
  );
};
