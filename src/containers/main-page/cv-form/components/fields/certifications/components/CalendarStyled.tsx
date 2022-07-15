import React, { useEffect } from 'react';

import TextField, { TextFieldProps } from '@mui/material/TextField';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

interface CalendarStyledProps {
  handleChangeFormDate: (date: Date | string) => void;
}

const CalendarStyled = function ({ handleChangeFormDate }: CalendarStyledProps):JSX.Element {
  const [value, setValue] = React.useState<Date | string>('');

  useEffect(() => handleChangeFormDate(value), [value]);

  const handleChange = (date: Date | null): void => {
    if (date) setValue(date);
  };
  const handleRenderParams = (params: TextFieldProps): JSX.Element => <TextField {...params} />;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        value={value}
        maxDate={new Date()}
        minDate={new Date(1900, 0)}
        onChange={handleChange}
        renderInput={handleRenderParams}
      />
    </LocalizationProvider>
  );
};
export default CalendarStyled;
