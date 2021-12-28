import { memo } from 'react';

import { Typography } from '@mui/material';

import TextFieldOutlined from 'common/components/text-field-outlined';

import { CategoryInputText, Text } from '../utils/constants';

import { AddAtoolButtonStyled, AddCircleIconStyled, InputContainerStyled } from '../utils/styled';

const TitleCategory = function (): JSX.Element {
  return (
    <>
      <Typography variant="h4">
        {Text.Category}
      </Typography>
      <InputContainerStyled>
        <TextFieldOutlined
          autoComplete="false"
          defaultValue=""
          label={CategoryInputText.Label}
          name={CategoryInputText.Name}
          onChange={() => null}
        />
        <AddAtoolButtonStyled>
          <AddCircleIconStyled />
          {Text.AddTool}
        </AddAtoolButtonStyled>
      </InputContainerStyled>
    </>
  );
};

export default memo(TitleCategory);
