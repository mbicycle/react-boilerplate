import { Paper, Grid } from '@mui/material';

import TopBox from './TopBox';
import PersonalDetails from './PersonalDetails';
import theme from '../../../common/theme';

const Wrapper = function (): JSX.Element {
  return (
    <Paper
      elevation={6}
      sx={{
        maxWidth: '100%',
        paddingBottom: theme.spacing(12),
        borderRadius: theme.spacing(0.5),
      }}
    >
      <Grid
        container
      >
        <Grid item xs={12}>
          <TopBox />
        </Grid>
        <Grid item sx={{ marginTop: theme.spacing(-25), zIndex: '20' }}>
          <PersonalDetails />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Wrapper;
