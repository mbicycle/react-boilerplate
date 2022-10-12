/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select, SelectProps } from '@mui/material';
import { forwardRef } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

interface ReactHookFormSelectProps<T extends FieldValues> extends SelectProps {
  name: string;
  control: Control<T>;
  children: React.ReactNode;
}

// eslint-disable-next-line prefer-arrow-callback
const ReactHookFormSelect = forwardRef(function<T extends FieldValues> ({
  name, control, children, defaultValue, ...props
}: ReactHookFormSelectProps<T | any>, ref: unknown): JSX.Element {
  console.debug(defaultValue);
  return (
    <Controller<T | FieldValues>
      render={({ field }) => (
        <Select
          {...ref}
          {...field}
          {...props}
          sx={{ display: 'flex' }}
        >
          {children}
        </Select>
      )}
      name={name}
      control={control}
      defaultValue={defaultValue || ''}
    />
  );
});
export default ReactHookFormSelect;
