/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select, SelectProps } from '@mui/material';
import { Control, Controller, FieldValues } from 'react-hook-form';

interface ReactHookFormSelectProps<T extends FieldValues> extends SelectProps {
  name: string;
  control: Control<T>;
  children: React.ReactNode;
}

const ReactHookFormSelect = function<T extends FieldValues> ({
  name,
  control,
  children,
  ...props
}: ReactHookFormSelectProps<T | any>): JSX.Element {
  return (
    <Controller<T | FieldValues>
      render={({ field }) => (
        <Select
          {...field}
          {...props}
          sx={{ display: 'flex' }}
        >
          {children}
        </Select>
      )}
      name={name}
      control={control}
      defaultValue=""
    />
  );
};
export default ReactHookFormSelect;
