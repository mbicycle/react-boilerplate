import { memo } from 'react';

import { Typography } from '@mui/material';

import { useSkillContext } from 'containers/main-page/cv-form/local-state/hooks';
import TextFieldOutlined from 'common/components/text-field-outlined';
import { useForm } from 'common/utils/hooks';

import { useDebouncedFn } from 'beautiful-react-hooks';
import { CategoryInputText, Text } from '../utils/constants';

import { GrayButtonStyled, AddCircleIconStyled, InputContainerStyled } from '../utils/styled';

const TitleCategory = function (): JSX.Element {
  const { handleChange, values: { titleCategory } } = useForm({ titleCategory: '' });
  const { dispatch } = useSkillContext();

  const onAddSkillHandle = (): void => {
    dispatch({ type: 'add-tool', skill: {} });
  };

  const onHandleCategoryChange = useDebouncedFn((e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: 'add-category', skill: { category: e.target.value } });
    handleChange(e);
  }, 300);

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
        />
        <GrayButtonStyled disabled={!titleCategory} onClick={onAddSkillHandle}>
          <AddCircleIconStyled />
          {Text.AddTool}
        </GrayButtonStyled>
      </InputContainerStyled>
    </>
  );
};

export default memo(TitleCategory);
