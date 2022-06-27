/* eslint-disable @typescript-eslint/no-explicit-any */
import { DesktopDatePicker, DesktopDatePickerProps } from '@mui/lab';
import { TextField } from '@mui/material';
import { Control, Controller, FieldValues } from 'react-hook-form';

interface ReactHookFormDatePickerProps<T extends FieldValues> extends Partial<DesktopDatePickerProps> {
  name: string;
  control: Control<T>;
}

const ReactHookFormDatePicker = function<T extends FieldValues> ({
  name,
  control,
  ...rest
}: ReactHookFormDatePickerProps<T | any>): JSX.Element {
  return (
    <Controller<T | FieldValues>
      render={({ field }) => (
        <DesktopDatePicker
          {...field}
          {...rest}
          label={rest.label}
          renderInput={(renderInputProps) => (
            <TextField {...renderInputProps} />
          )}
        />
      )}
      name={name}
      control={control}
      defaultValue=""
    />
  );
};
export default ReactHookFormDatePicker;
