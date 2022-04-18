import { memo } from 'react';

import { Typography } from '@mui/material';

import { useSkillContext } from 'containers/main-page/cv-form/local-state/hooks';
import TextFieldOutlined from 'common/components/text-field-outlined';
import { useForm } from 'common/utils/hooks';

import { useDebouncedFn } from 'beautiful-react-hooks';
import { CategoryInputText, DEBOUNCE_TIMEOUT, Text } from '../utils/constants';

import { GrayButtonStyled, AddCircleIconStyled, InputContainerStyled } from '../utils/styled';
import { useAddOrEditSkill } from '../lib/query-hooks';

const TitleCategory = function ({ value }: {value: string}): JSX.Element {
  const { handleChange, values: { titleCategory } } = useForm({ titleCategory: '' });
  const { dispatch } = useSkillContext();
  const { mutateAsync } = useAddOrEditSkill();

  const onAddSkillHandle = (): void => {
    dispatch({ type: 'add-tool' });
  };

  const onHandleCategoryChange = useDebouncedFn(async (
    e: React.ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    dispatch({ type: 'add-category', skill: { category: e.target.value } });
    await mutateAsync({ _id: '', category: e.target.value });
    handleChange(e);
  }, DEBOUNCE_TIMEOUT);

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
        />
        <GrayButtonStyled
          disabled={!titleCategory}
          onClick={onAddSkillHandle}
        >
          <AddCircleIconStyled />
          {Text.AddTool}
        </GrayButtonStyled>
      </InputContainerStyled>
    </>
  );
};

export default memo(TitleCategory);
