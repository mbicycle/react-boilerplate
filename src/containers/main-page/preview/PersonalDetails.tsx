import { Grid, Container } from '@mui/material';

import PersonalInformation from './PersonalInformation';
import Languages from './Languages';
import Skills from './Skills';
import Certifications from './Certifications';

const PersonalDetails = function (): JSX.Element {
  return (
    <Container
      component={Grid}
      maxWidth="lg"
    >
      <Grid item xs={12}>
        <PersonalInformation />
      </Grid>
      <Grid item xs={12}>
        <Languages />
      </Grid>
      <Grid item xs={12}>
        <Skills />
      </Grid>
      <Grid item xs={12}>
        <Certifications />
      </Grid>
    </Container>

  );
};

export default PersonalDetails;
