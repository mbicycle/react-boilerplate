import {
  memo,
  useEffect,
  useMemo,
  useState,
} from 'react';

import ReactHookFormTextFieldOutlined
  from 'common/components/react-hook-forms/ReactHookFormTextFieldOutlined';
import type { Project as ProjectFieldValues } from 'common/models/User';
import { ButtonStep } from 'containers/main-page/cv-form/utils/constants';
import { useForm } from 'react-hook-form';

import {
  Divider,
  Grid,
} from '@mui/material';

import {
  CancelButtonStyled,
  SaveButtonStyled,
  SaveButtonWrapperStyled,
} from '../../../skills/utils/styled';
import CategorySelection from '../CategorySelection';
import DatePickers from '../DatePickers';
import Responsibilities from '../Responsibilities';
import { useEditProject } from './hooks';

const EditProject = function (): JSX.Element | null {
  const {
    project,
    isLoading,
    cancelHandle,
    onSaveProjectHandle,
  } = useEditProject();

  const [open, setOpen] = useState(false);

  const formValues = useForm<ProjectFieldValues>({ mode: 'onChange', criteriaMode: 'all' });

  const responsibilities = useMemo(
    () => project?.responsibilities.map((responsibility) => ({ responsibility })),
    [project?.responsibilities],
  );

  const categories = useMemo(() => project?.categories.map((category) => {
    const values = category.split(',');
    return {
      category: values[0],
      skill: values[1],
      tools: [values[2]],
    };
  }), [project?.categories]);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  // const onSubmitHandle = ({ category, skill, tools }: OnSubmitTypes): void => {
  //   append({
  //     category: category?.name,
  //     skill: skill?.name,
  //     tools: tools.flat(Infinity),
  //   });
  //   setOpen(false);
  // };

  const onClose = (): void => setOpen(false);

  useEffect(() => {
    if (!project) return;

    Object.entries(project).forEach(([key, value]) => {
      if (key !== 'responsibilities' && key !== 'categories') {
        formValues.setValue(key as keyof ProjectFieldValues, value);
      }
    });
  }, [project, formValues]);

  return (
    <Grid
      container
      sx={{ p: 4 }}
      gap={4}
      direction="column"
      component="form"
      onSubmit={formValues.handleSubmit(onSaveProjectHandle)}
    >
      <Grid
        item
        container
        direction="row"
        wrap="nowrap"
        xs={12}
        gap={4}
      >
        <Grid container gap={4}>
          <Grid item xs={12}>
            <ReactHookFormTextFieldOutlined
              key={project?.title}
              control={formValues.control}
              label="Project title"
              name="title"
              type="text"
              variant="outlined"
              required
            />
          </Grid>
          <DatePickers formValues={formValues} defaultValue={{ from: project?.from, to: project?.to }} />
          <Grid item xs={12}>
            <ReactHookFormTextFieldOutlined
              key={project?.title}
              control={formValues.control}
              label="Product link (optional)"
              name="link"
              type="url"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid item container gap={4} alignContent="flex-start">
          <Grid item xs={12}>
            <ReactHookFormTextFieldOutlined
              key={project?.title}
              control={formValues.control}
              label="Project role"
              name="role"
              type="text"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <ReactHookFormTextFieldOutlined
              key={project?.title}
              control={formValues.control}
              label="Project team size"
              name="teamSize"
              type="number"
              inputProps={{ min: 0 }}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ReactHookFormTextFieldOutlined
          key={project?.title}
          control={formValues.control}
          label="Project description"
          name="description"
          type="text"
          multiline
          minRows={5}
          variant="outlined"
        />
      </Grid>
      <Grid item xs>
        <Responsibilities
          formValues={formValues}
          defaultValues={responsibilities}
        />
      </Grid>
      <Grid item xs>
        <CategorySelection
          formValues={formValues}
          defaultValues={categories}
        />
      </Grid>
      <Divider />
      <SaveButtonWrapperStyled item>
        <CancelButtonStyled
          onClick={cancelHandle}
          variant="outlined"
        >
          {ButtonStep.Cancel}
        </CancelButtonStyled>
        <SaveButtonStyled
          type="submit"
          disabled={!project?.title}
          variant="contained"
          loading={isLoading}
        >
          {ButtonStep.Save}
        </SaveButtonStyled>
      </SaveButtonWrapperStyled>
    </Grid>

  );
};

export default memo(EditProject);
