import { memo, useEffect } from 'react';
import { ButtonStep } from 'containers/main-page/cv-form/utils/constants';
import { Divider, Grid } from '@mui/material';

import { useForm } from 'react-hook-form';

import type { Project as ProjectFieldValues } from 'common/models/User';
import
ReactHookFormTextFieldOutlined
  from 'common/components/react-hook-forms/ReactHookFormTextFieldOutlined';

import {
  SaveButtonStyled,
  SaveButtonWrapperStyled,
  CancelButtonStyled,
} from '../../../skills/utils/styled';
import { useEditProject } from './hooks';
import DatePickers from '../DatePickers';
import CategorySelection from '../CategorySelection';
import Responsibilities from '../Responsibilities';

const EditProject = function (): JSX.Element | null {
  const {
    project,
    isLoading,
    cancelHandle,
    onSaveProjectHandle,
  } = useEditProject();

  const formValues = useForm<ProjectFieldValues>({ mode: 'onChange', criteriaMode: 'all' });

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
          defaultValues={project?.responsibilities.map((responsibility) => ({ responsibility }))}
        />
      </Grid>
      <Grid item xs>
        <CategorySelection
          formValues={formValues}
          defaultValues={project?.categories.map((category) => {
            const values = category.split(',');
            return {
              category: values[0],
              skill: values[1],
              tools: [values[2]],
            };
          })}
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
