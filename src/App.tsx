import { Typography, Box } from '@mui/material';

import LogoIcon from 'common/icons/LogoIcon';
import Copyright from 'containers/Copyright';

import { ContainerStyled } from 'styled';

const App = function (): JSX.Element {
  return (
    <ContainerStyled>
      <LogoIcon color="info" />
      <Box sx={{ my: 4 }}>
        <Typography color="Highlight" variant="h4" component="h1" gutterBottom>
          Create React App v5 example with styled-components and TypeScript
        </Typography>
        <Copyright />
      </Box>
    </ContainerStyled>
  );
};

export default App;
