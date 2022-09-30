import { memo } from 'react';
import { ButtonStep } from 'containers/main-page/cv-form/utils/constants';
import { Divider, Grid } from '@mui/material';
import
ReactHookFormTextFieldOutlined
  from 'common/components/react-hook-forms/ReactHookFormTextFieldOutlined';
import { useForm } from 'react-hook-form';
import TextFieldOulined from 'common/components/text-field-outlined';

import type { Project as ProjectFieldValues } from 'common/models/User';
import DatePickersEdit from './DatePeckersEdit';

import {
  CategoryContainerStyled, DividerStyled,
  SaveButtonStyled, ToolsContainerStyled,
  SaveButtonWrapperStyled,
  CancelButtonStyled,
} from '../../../skills/utils/styled';
import { useProjectItem, useUpdateProjectById } from './hooks';

const EditProject = function (): JSX.Element | null {
  const {
    project,
    isLoading,
    cancelHandle,
    onSaveProjectHandle,
  } = useUpdateProjectById();

  const formValues = useForm<ProjectFieldValues>({ mode: 'onChange', criteriaMode: 'all' });
  return (
    <>
      <Grid
        container
        sx={{ p: 4 }}
        gap={4}
        direction="column"
        component="form"
      // onSubmit={formValues.handleSubmit(handleSaveProject)}
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
              <TextFieldOulined
                label="Project title"
                name="title"
                type="text"
                required
                defaultValue={project?.title}
                onChange={() => console.log()}
              />
            </Grid>

            <DatePickersEdit from={project?.from} to={project?.to} />

            <Grid item xs={12}>
              <TextFieldOulined
                label="Product link (optional)"
                name="link"
                type="url"
                defaultValue={project?.link}
                onChange={() => console.log('edit link')}
              />
            </Grid>
          </Grid>
          <Grid item container gap={4} alignContent="flex-start">
            <Grid item xs={12}>
              <TextFieldOulined
                label="Project role"
                name="role"
                type="text"
                defaultValue={project?.role}
                onChange={() => console.log()}
              />
            </Grid>
            <Grid item xs={6}>
              <TextFieldOulined
                label="Project team size"
                name="teamSize"
                type="number"
                inputProps={{ min: 0 }}
                defaultValue={project?.teamSize}
                onChange={() => console.log()}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextFieldOulined
            label="Project description"
            name="description"
            type="text"
            multiline
            minRows={5}
            defaultValue={project?.description}
            onChange={() => console.log()}
          />
        </Grid>
        {/* <Grid item xs>
        <Responsibilities formValues={formValues} />
      </Grid>
      <Grid item xs>
        <CategorySelection formValues={formValues} />
      </Grid> */}
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
          disabled={!project?.title}
          onClick={onSaveProjectHandle}
          variant="contained"
          loading={isLoading}
        >
          {ButtonStep.Save}
        </SaveButtonStyled>
      </SaveButtonWrapperStyled>

      {/* {projectToEdit} */}

    </>
    // <CategoryContainerStyled>
    //   <TitleProject
    //     value={project?.name || ''}
    //     onChange={handleProjectNameChange}
    //   />
    //   {category?.skills?.length ? (
    //     <>
    //       <DividerStyled variant="fullWidth" />
    //       <ToolsContainerStyled>
    //         {
    //           category?.skills.map((skill) => (
    //             <Skill
    //               key={skill.id}
    //               skill={skill}
    //             />
    //           ))
    //         }
    //       </ToolsContainerStyled>
    //     </>
    //   ) : null}
    //   <SaveButtonWrapperStyled item>
    //     <CancelButtonStyled
    //       onClick={cancelHandle}
    //       variant="outlined"
    //     >
    //       {ButtonStep.Cancel}
    //     </CancelButtonStyled>
    //     <SaveButtonStyled
    //       disabled={!project?.name}
    //       onClick={onSaveProjectHandle}
    //       variant="contained"
    //       loading={isLoading}
    //     >
    //       {ButtonStep.Save}
    //     </SaveButtonStyled>
    //   </SaveButtonWrapperStyled>
    // </CategoryContainerStyled>

  );
};

export default memo(EditProject);
