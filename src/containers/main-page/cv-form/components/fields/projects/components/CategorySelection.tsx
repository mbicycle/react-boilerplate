import {
  memo,
  useEffect,
  useState,
} from 'react';

import CircularSpinner from 'common/components/circular-spinner/circular-spinner';
import {
  Category,
  Skill,
} from 'common/models/User';
import {
  FieldArrayWithId,
  useFieldArray,
  useForm,
  UseFormReturn,
} from 'react-hook-form';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {
  Box,
  Button,
  Grid,
  Tooltip,
  Typography,
} from '@mui/material';

import { useUserFromDb } from '../../personal-information/lib/query-hooks';
import { ProjectFieldValues } from '../utils/types';
import CategoryItem from './CategoryItem';
import SkillsToolsDialog from './SkillsToolsDialog';
import {
  ButtonText,
  CategoryAddText,
  tooltipText,
} from './utils/constants';
import {
  InfoIconStyled,
  ProjectTitleStyled,
} from './utils/styledEdit';

export type CategoryItemProps = {
  categories: {
    category: string;
    skill: string;
    tools: string[];
  }[];
};
type OnSubmitTypes = {
  tools: string[];
  category?: Category;
  skill?: Skill;
}

type CategorySelectionProps = {
  formValues: UseFormReturn<ProjectFieldValues>;
  defaultValues?: {
    category: string;
    skill: string;
    tools: string[];
  }[];
}

const CategorySelection = function (
  {
    formValues, defaultValues,
  }: CategorySelectionProps,
): JSX.Element {
  const { data, isLoading } = useUserFromDb();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<FieldArrayWithId<CategoryItemProps, 'categories', 'id'>>();

  const { control } = useForm<CategoryItemProps>(
    {
      mode: 'onChange',
      defaultValues: {
        categories: defaultValues,
      },
    },
  );
  const {
    fields, append, remove, update,
  } = useFieldArray({
    control,
    name: 'categories',
  });

  const handleClickOpen = (field?: FieldArrayWithId<CategoryItemProps, 'categories', 'id'>): void => {
    setOpen(true);
    if (field) {
      setSelected(field);
    }
  };

  const onSubmitHandle = ({ category, skill, tools }: OnSubmitTypes): void => {
    if (selected) {
      const idx = fields.findIndex((item) => item.id === selected.id);
      update(idx, {
        category: category?.name || '',
        skill: skill?.name || '',
        tools: tools.flat(Infinity),
      });
      setSelected(undefined);
    } else {
      append({
        category: category?.name,
        skill: skill?.name,
        tools: tools.flat(Infinity),
      });
    }

    setOpen(false);
  };

  const onClose = (): void => setOpen(false);

  useEffect(() => {
    formValues.setValue(
      'categories',
      fields.map(({ category, skill, tools }) => (`${category}, ${skill}, ${tools} `)),
    );
  }, [fields, formValues]);

  const deleteCategory = (index: number): void => {
    remove(index);
  };

  if (isLoading) {
    return <CircularSpinner size="medium" color="primary" />;
  }

  return (
    <Grid item xs={12}>
      <Box display="inline-flex">
        <ProjectTitleStyled variant="h5">{CategoryAddText.Title}</ProjectTitleStyled>
        <Tooltip title={<Typography>{tooltipText}</Typography>}>
          <InfoIconStyled fontSize="medium" />
        </Tooltip>
      </Box>
      <Grid container xs={12}>
        <Grid item container xs={12}>
          {fields.map((field, index) => (
            field.category ? (
              <CategoryItem
                key={field.id}
                category={field.category}
                skill={field.skill}
                tool={field.tools}
                onDelete={(): void => deleteCategory(index)}
                onClick={(): void => handleClickOpen(field)}
              />
            ) : null
          ))}
        </Grid>
        <Button
          color="primary"
          variant="outlined"
          sx={{ marginLeft: 'auto' }}
          onClick={(): void => handleClickOpen()}
        >
          <AddCircleOutlineIcon fontSize="large" />
          &nbsp;
          {ButtonText.Add}
        </Button>

        <SkillsToolsDialog
          user={data}
          open={open}
          onClose={onClose}
          control={control}
          onSubmit={(dataDialogForm: OnSubmitTypes) => onSubmitHandle(dataDialogForm)}
          defaultValues={selected}
        />
      </Grid>
    </Grid>
  );
};

export default memo(CategorySelection);
