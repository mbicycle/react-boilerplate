import { memo, useEffect } from 'react';
import { useForm, useFieldArray, UseFormReturn } from 'react-hook-form';

import
ReactHookFormTextFieldOutlined
  from 'common/components/react-hook-forms/ReactHookFormTextFieldOutlined';
import { Button } from '@mui/material';
import { AddResponsibilityButtonStyled, AddCircleIconStyled } from '../utils/styled';

import { ButtonText } from './utils/constants';
import { ProjectFieldValues } from '../utils/types';

type AddResponsibilityProps = {
  responsibilities: {
    responsibilities: string[] | undefined;
    responsibility: string | undefined;
  }[];
}

const Responsibilities = function ({ formValues }: { formValues: UseFormReturn<ProjectFieldValues> }): JSX.Element {
  const { control } = useForm<AddResponsibilityProps>(
    {
      defaultValues: {
        responsibilities: [{
          responsibility: '',
        }],
      },
      mode: 'onChange',
    },
  );
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'responsibilities',
  });

  const onAddHandle = ({ responsibilities }: { responsibilities: string[] }): any => {
    append({
      responsibilities: responsibilities.flat(Infinity),
    });
  };

  // useEffect(() => {
  //   formValues.setValue('responsibilities', fields.map(({ responsibility }) => responsibility));
  // }, [fields]);
  const deleteResponsibility = (index: number): void => {
    remove(index);
  };

  return (
    <>{fields.map((field, index) => (

      <ReactHookFormTextFieldOutlined
        key={index}
        control={control}
        label="Responsibilities"
        name="responsibilities"
        type="text"
        variant="outlined"
      />
    ))}
      <Button>
        <AddCircleIconStyled />
        &nbsp;
        {ButtonText.Add}
      </Button>
    </>
  );
};

export default memo(Responsibilities);
// color="primary"
// variant="outlined"
// sx={{ marginRight: 4 }}
// onClick={onSubmitHandle}
// Compare this snippet from src\containers\main-page\cv-form\components\fields\projects\components\ProjectItem.tsx:
// import { memo } from 'react';
// import ProfiencyItem from 'common/components/profiency/ProfiencyItem';
// import { Project } from 'common/models/User';
// import { useDeleteProject } from '../lib/query-hooks';
//
// const ProjectItem = function ({
//   title, from, to,
// }: Project): JSX.Element {
//   const { mutateAsync: onDelete, isLoading } = useDeleteProject();
