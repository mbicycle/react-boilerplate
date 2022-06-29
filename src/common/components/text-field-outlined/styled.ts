import { styled, TextField } from '@mui/material';

type ExtendedTextFieldType = {
  $isMultiline?: boolean;
};

export const TextFieldStyled = styled(TextField, {
  shouldForwardProp: (prop) => prop !== '$isMultiline',
})<ExtendedTextFieldType>(
  ({ theme, $isMultiline }) => ({
    margin: theme.spacing(3, 0),
    height: $isMultiline ? 'initial' : 48,
  }),
);
