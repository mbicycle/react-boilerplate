import { memo } from 'react';

import { Typography } from '@mui/material';

import TextFieldOutlined from 'common/components/text-field-outlined';
import { useCategoryContext } from 'containers/main-page/cv-form/local-state/hooks';
import { useCategoryIdContext } from 'containers/main-page/cv-form/local-state/hooks';

import { ProjectInputText, Text } from '../utils/constants';

import { AddProjectButtonStyled, AddCircleIconStyled, InputContainerStyled } from '../utils/styledEdit';

interface TitleProjectProps {
  value: string;
  onChange?: (e: string) => void;
}

const TitleProject = function ({ value, onChange }: TitleProjectProps): JSX.Element {
  const { dispatch } = useCategoryContext();

  const onAddProjectHandle = (): void => {
    dispatch({ type: 'add-skill' });
  };

  const onHandleProjectChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <>
      <Typography variant="h4">{Text.Project}</Typography>
      <InputContainerStyled>
        <TextFieldOutlined
          autoComplete="false"
          label={ProjectInputText.Label}
          name={ProjectInputText.Name}
          onChange={onHandleProjectChange}
          defaultValue={value}
        />
        <AddProjectButtonStyled
          disabled={!value}
          onClick={onAddProjectHandle}
        >
          <AddCircleIconStyled />
          {Text.AddSkill}
        </AddProjectButtonStyled>
      </InputContainerStyled>
    </>
  );
};

export default memo(TitleProject);
