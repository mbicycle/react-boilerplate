import { Grid } from '@mui/material';
import TopBox from './TopBox';
import PersonalDetails from './PersonalDetails';

import { PersonalDetailsWrapperGrid, PaperWrapper } from '../styled';

const Wrapper = function (): JSX.Element {
  return (
    <div id="preview" style={{ backgroundColor: '#ffffff' }}>
      <PaperWrapper
        elevation={6}
        sx={{ backgroundColor: '#ffffff' }}
      >
        <Grid container>
          <Grid item xs={12}>
            <TopBox />
          </Grid>
          <PersonalDetailsWrapperGrid item>
            <PersonalDetails />
          </PersonalDetailsWrapperGrid>
        </Grid>
      </PaperWrapper>
    </div>
  );
};

export default Wrapper;
