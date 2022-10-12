/* eslint-disable @typescript-eslint/no-explicit-any */
import { DesktopDatePicker, DesktopDatePickerProps } from '@mui/lab';
import { TextField } from '@mui/material';
import { Control, Controller, FieldValues } from 'react-hook-form';

interface ReactHookFormDatePickerProps<T extends FieldValues> extends Partial<DesktopDatePickerProps> {
  name: string;
  control: Control<T>;
  defaultValue?: FieldValues;
}

const ReactHookFormDatePicker = function<T extends FieldValues> ({
  name,
  control,
  defaultValue,
  ...rest
}: ReactHookFormDatePickerProps<T | any>): JSX.Element {
  return (
    <Controller<T | FieldValues>
      name={name}
      control={control}
      defaultValue={defaultValue || null}
      render={({ field, fieldState: { error } }) => (
        <DesktopDatePicker
          {...field}
          {...rest}
          label={rest.label}
          inputFormat="dd/MM/yyyy"
          renderInput={(renderInputProps) => <TextField {...renderInputProps} error={!!error?.message} />}
        />
      )}
    />
  );
};
export default ReactHookFormDatePicker;
