import { memo } from 'react';
import { useLocation } from 'react-router-dom';

import { Typography } from '@mui/material';

import TextFieldOutlined from 'common/components/text-field-outlined';
import { useSkillContext } from 'containers/main-page/cv-form/local-state/hooks';

import { CategoryInputText, Text } from '../utils/constants';

import { AddToolButtonStyled, AddCircleIconStyled, InputContainerStyled } from '../utils/styled';

interface TitleCategoryProps {
value: string;
onChange?:(e: string) => void;
}

const TitleCategory = function ({ value, onChange }: TitleCategoryProps): JSX.Element {
  const location = useLocation();

  const { dispatch } = useSkillContext();

  const onAddSkillHandle = (): void => {
    dispatch({ type: 'add-tool' });
  };

  const onHandleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <>
      <Typography variant="h4">
        {Text.Category}
      </Typography>
      <InputContainerStyled>
        <TextFieldOutlined
          autoComplete="false"
          label={CategoryInputText.Label}
          name={CategoryInputText.Name}
          onChange={onHandleCategoryChange}
          defaultValue={value}
          // TODO: Add id on backend for title editing.
          disabled={location.pathname.includes('skills/edit')}
        />
        <AddToolButtonStyled
          disabled={!value}
          onClick={onAddSkillHandle}
        >
          <AddCircleIconStyled />
          {Text.AddTool}
        </AddToolButtonStyled>
      </InputContainerStyled>
    </>
  );
};

export default memo(TitleCategory);
