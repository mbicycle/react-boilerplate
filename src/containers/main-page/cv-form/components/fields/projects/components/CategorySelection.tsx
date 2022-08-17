import { useState, memo, useEffect } from 'react';
import { useForm, UseFormReturn, useFieldArray } from 'react-hook-form';

import {
  Grid, Typography,
  Tooltip, Box, Button,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import CircularSpinner from 'common/components/circular-spinner/circular-spinner';

import { Category, Skill } from 'common/models/User';
import { ProjectFieldValues } from '../utils/types';
import { useUserFromDb } from '../../personal-information/lib/query-hooks';
import { ButtonText, CategoryAddText, tooltipText } from './utils/constants';

import { CategoriesTitleStyled, InfoIconStyled } from './utils/styled';
import SkillsToolsDialog from './SkillsToolsDialog';
import CategoryItem from './CategoryItem';

type CategoryItemProps = {
  categories: {
    category: string | undefined;
    skill: string | undefined;
    tools: string[] | undefined;
  }[];
};

const CategorySelection = function (
  { formValues }: { formValues: UseFormReturn<ProjectFieldValues>; },
): JSX.Element {
  const { data, isLoading } = useUserFromDb();
  const [open, setOpen] = useState(false);
  const { control, register } = useForm<CategoryItemProps>(
    {
      defaultValues:
      {
        categories:
          [{
            category: '',
            skill: '',
            tools: [],
          }],
      },
      mode: 'onChange',
    },
  );
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'categories',
  });

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const onSubmitHandle = ({ category, skill, tools }: { category: Category, skill: Skill, tools: string[] }): any => {
    append({
      category: category.name,
      skill: skill.name,
      tools: tools.flat(Infinity),
    });
    setOpen(false);
  };

  useEffect(() => {
    formValues.setValue('categories', fields.map(({ category, skill, tools }) => (`${category}, ${skill}, ${tools} `)));
  }, [fields]);

  const deleteCategory = (index: number): void => {
    remove(index);
  };

  if (isLoading) {
    return <CircularSpinner size="medium" color="primary" />;
  }

  return (
    <Grid item xs={12}>
      <Box display="inline-flex">
        <CategoriesTitleStyled variant="h5">{CategoryAddText.Title}</CategoriesTitleStyled>
        <Tooltip title={<Typography>{tooltipText}</Typography>}>
          <InfoIconStyled fontSize="medium" />
        </Tooltip>
      </Box>
      <Grid container xs={12}>
        <Grid item container xs={12}>
          {fields ? fields.map((field, index) => (
            <CategoryItem
              key={field.id}
              category={field.category}
              skill={field.skill}
              tool={field.tools}
              onDelete={(): void => deleteCategory(index)}
            />
          )) : null}
        </Grid>
        <Button
          color="primary"
          variant="outlined"
          sx={{ marginLeft: 'auto' }}
          onClick={handleClickOpen}
        >
          <AddCircleOutlineIcon fontSize="large" />
          &nbsp;
          {ButtonText.Add}
        </Button>

        <SkillsToolsDialog
          user={data}
          open={open}
          onClose={(): void => setOpen(false)}
          control={control}
          onSubmit={(dataDialogForm: any) => onSubmitHandle(dataDialogForm)}
        />
      </Grid>
    </Grid>
  );
};

export default memo(CategorySelection);
