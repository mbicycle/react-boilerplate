/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo } from 'react';
import { OutlinedTextFieldProps, TextField } from '@mui/material';
import { Control, Controller } from 'react-hook-form';

import { FieldValues } from './utils/types';

interface TextFieldOutlinedControlledProps<T extends FieldValues> extends OutlinedTextFieldProps {
  control: Control<T>;
  label: string;
  type: React.InputHTMLAttributes<unknown>['type'];
  name: string;
}

const ReactHookFormTextFieldOutlined = function<T extends FieldValues> ({
  control, label, type, name, ...props
}: TextFieldOutlinedControlledProps<T | any>): JSX.Element {
  return (
    <Controller<T | FieldValues>
      control={control}
      name={name}
      defaultValue=""
      key={name}
      render={({ field }) => (
        <TextField
          {...field}
          {...props}
          value={field.value || ''}
          label={label}
          type={type}
          name={name}
          fullWidth
        />
      )}
    />
  );
};

export default memo(ReactHookFormTextFieldOutlined);
