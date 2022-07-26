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
  // console.log(control.getFieldState('id'));
  return (
    <Controller<T | FieldValues>
      name={name}
      control={control}
      defaultValue={null}
      render={({ field, fieldState: { error } }) => (
        <DesktopDatePicker
          {...field}
          {...rest}
          label={rest.label}
          renderInput={(renderInputProps) => <TextField {...renderInputProps} error={!!error?.message} />}
        />
      )}
    />
  );
};
export default ReactHookFormDatePicker;
