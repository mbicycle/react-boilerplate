import { memo, useEffect } from 'react';
import { useForm, useFieldArray, UseFormReturn } from 'react-hook-form';

import
ReactHookFormTextFieldOutlined
  from 'common/components/react-hook-forms/ReactHookFormTextFieldOutlined';
import {
  Button, TextField, Grid, Typography,
} from '@mui/material';
import { AddResponsibilityButtonStyled, AddCircleIconStyled } from '../utils/styled';

import { ButtonText } from './utils/constants';
import { ProjectFieldValues } from '../utils/types';

type AddResponsibilityProps = {
  responsibilities: {
    responsibility: string;
  }[];
}

const Responsibilities = function ({ formValues }: { formValues: UseFormReturn<ProjectFieldValues> }): JSX.Element {
  const {
    register, control, watch,
  } = useForm<AddResponsibilityProps>({
    defaultValues: {
      responsibilities: [{
        responsibility: '',
      }],
    },
    mode: 'onBlur',
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'responsibilities',
  });

  const onAddHandle = (): any => {
    append({ responsibility: '' });
  };

  const watchFieldArray = watch('responsibilities');
  const controlledFields = fields.map((field, index) => ({ ...field, ...watchFieldArray[index] }));

  useEffect(() => {
    formValues.setValue('responsibilities', [...controlledFields.map((field) => (field.responsibility))]);
  }, [controlledFields]);

  return (
    <form>
      <Typography>
        Responsibilities
      </Typography>
      {controlledFields.map(
        (field, index) => (
          <Grid container margin={5}>
            <Grid item xs key={field.id}>
              <TextField
                id="outlined-basic"
                fullWidth
                label={`Responsibility ${index + 1}`}
                variant="outlined"
                {...register(`responsibilities.${index}.responsibility` as const)}
              />
            </Grid>
            <Grid item>
              <Button
                type="button"
                onClick={() => remove(index)}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        ),
      )}
      <Button
        onClick={onAddHandle}
      >
        <AddCircleIconStyled />
        &nbsp;
        {ButtonText.Add}
      </Button>
    </form>
  );
};

export default memo(Responsibilities);
