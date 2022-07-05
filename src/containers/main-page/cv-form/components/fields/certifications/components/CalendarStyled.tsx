import * as React from 'react';
import TextField from '@mui/material/TextField';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { useEffect } from 'react';

interface CalendarStyledProps {
  handleChangeFormDate: (date: Date | null) => void;
}
const CalendarStyled = function ({ handleChangeFormDate }: CalendarStyledProps):JSX.Element {
  const [value, setValue] = React.useState<Date | null>(null);
  useEffect(() => handleChangeFormDate(value), [value]);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};
export default CalendarStyled;
