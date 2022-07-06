import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Divider, Grid } from '@mui/material';

import
ReactHookFormTextFieldOutlined
  from 'common/components/react-hook-forms/ReactHookFormTextFieldOutlined';
import { getKeyOf } from 'common/utils/helpers';
import { ButtonStep } from 'containers/main-page/cv-form/utils/constants';

import { ProjectFieldValues } from '../utils/types';
import DatePickers from './DatePickers';
import CategorySelection from './CategorySelection';

import { CancelButtonStyled, SaveButtonStyled, SaveButtonWrapperStyled } from '../../skills/utils/styled';

const Project = function (): JSX.Element {
  const navigate = useNavigate();

  const formValues = useForm<ProjectFieldValues>({ mode: 'onChange', criteriaMode: 'all' });

  const handleCancel = (): void => {
    navigate(-1);
  };

  const handleSaveProject = (values: ProjectFieldValues): void => {
    console.log(values);
  };

  return (
    <Grid
      container
      sx={{ p: 4 }}
      gap={4}
      direction="column"
      component="form"
      onSubmit={formValues.handleSubmit(handleSaveProject)}
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
              control={formValues.control}
              label="Project title"
              name={getKeyOf<ProjectFieldValues>('title')}
              type="text"
              variant="outlined"
              required
            />
          </Grid>
          <DatePickers formValues={formValues} />
          <Grid item xs={12}>
            <ReactHookFormTextFieldOutlined
              control={formValues.control}
              label="Product link (optional)"
              name={getKeyOf<ProjectFieldValues>('link')}
              type="url"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid item container gap={4} alignContent="flex-start">
          <Grid item xs={12}>
            <ReactHookFormTextFieldOutlined
              control={formValues.control}
              label="Project role"
              name={getKeyOf<ProjectFieldValues>('role')}
              type="text"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <ReactHookFormTextFieldOutlined
              control={formValues.control}
              label="Project team size"
              name={getKeyOf<ProjectFieldValues>('teamSize')}
              type="number"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ReactHookFormTextFieldOutlined
          control={formValues.control}
          label="Project description"
          name={getKeyOf<ProjectFieldValues>('description')}
          type="text"
          multiline
          minRows={5}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <ReactHookFormTextFieldOutlined
          control={formValues.control}
          label="Responsibilities"
          name={getKeyOf<ProjectFieldValues>('responsibilities')}
          type="text"
          multiline
          minRows={5}
          variant="outlined"
        />
      </Grid>
      <CategorySelection formValues={formValues} />
      <Divider />
      <SaveButtonWrapperStyled item>
        <CancelButtonStyled
          onClick={handleCancel}
          variant="outlined"
        >
          {ButtonStep.Cancel}
        </CancelButtonStyled>
        <SaveButtonStyled
          disabled={false}
          type="submit"
          variant="contained"
        >
          {ButtonStep.Save}
        </SaveButtonStyled>
      </SaveButtonWrapperStyled>
    </Grid>
  );
};

export default Project;