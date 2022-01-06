import { Grid, Typography } from '@mui/material';

import GoogleLoginComponent from 'containers/authentication/components/GoogleLoginComponent';
import { Text } from 'containers/authentication/utils/constants';

import {
  ColoredLogoContainerStyled, LoginContainerStyled, LogoColoredIconStyled, PaperStyled,
} from './styled';

const Login = function (): JSX.Element {
  return (
    <LoginContainerStyled item container xs={5} wrap="nowrap">
      <PaperStyled elevation={5}>
        <ColoredLogoContainerStyled>
          <LogoColoredIconStyled />
        </ColoredLogoContainerStyled>
        <Typography variant="h6">{Text.CardTitle}</Typography>
        <Typography
          variant="subtitle2"
          color="GrayText"
          fontWeight="bold"
        >
          {Text.CardDescription}
        </Typography>
        <Grid item container direction="row" gap={5}>
          <GoogleLoginComponent />
        </Grid>
      </PaperStyled>
    </LoginContainerStyled>
  );
};

export default Login;
