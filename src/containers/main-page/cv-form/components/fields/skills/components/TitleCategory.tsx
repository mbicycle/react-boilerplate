import { memo } from 'react';

import { Typography } from '@mui/material';

import TextFieldOutlined from 'common/components/text-field-outlined';
import { useCategoryContext } from 'containers/main-page/cv-form/local-state/hooks';

import { CategoryInputText, Text } from '../utils/constants';

import { AddToolButtonStyled, AddCircleIconStyled, InputContainerStyled } from '../utils/styled';

interface TitleCategoryProps {
value: string;
onChange?:(e: string) => void;
}

const TitleCategory = function ({ value, onChange }: TitleCategoryProps): JSX.Element {
  const { dispatch } = useCategoryContext();

  const onAddSkillHandle = (): void => {
    dispatch({ type: 'add-skill' });
  };

  const onHandleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>): void => onChange && onChange(e.target.value);

  return (
    <>
      <Typography variant="h4">{Text.Category}</Typography>
      <InputContainerStyled>
        <TextFieldOutlined
          autoComplete="false"
          label={CategoryInputText.Label}
          name={CategoryInputText.Name}
          onChange={onHandleCategoryChange}
          defaultValue={value}
        />
        <AddToolButtonStyled
          disabled={!value}
          onClick={onAddSkillHandle}
        >
          <AddCircleIconStyled />
          {Text.AddSkill}
        </AddToolButtonStyled>
      </InputContainerStyled>
    </>
  );
};

export default memo(TitleCategory);
