import { useState } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';

import { Grid } from '@mui/material';

import ReactHookFormDatePicker from 'common/components/react-hook-forms/ReactHookFormDatePicker';
import { Project } from 'common/models/User';
import dayjs from 'dayjs';

// import { ProjectFieldValues } from '../utils/types';

// interface DatePickersProps {
//   formValues: UseFormReturn<ProjectFieldValues>;
// }

const DatePickersEdit = function ({ from, to }: Partial<Project>): JSX.Element {
  const [stateFrom, setFrom] = useState(dayjs(from).format('DD/MM/YYYY'));
  const [sateTo, setTo] = useState(dayjs(to).format('DD/MM/YYYY'));

  const changeStartDateHandle = (date: unknown): void => {
    if (date instanceof Date) {
      setFrom(date.toISOString());
    }
  };

  const changeEndDateHandle = (date: unknown): void => {
    if (date instanceof Date) {
      setTo(date.toISOString());
    }
  };

  const { control } = useForm();

  return (
    <Grid item container xs={12} wrap="nowrap" columnGap={4}>
      <ReactHookFormDatePicker
        onChange={changeStartDateHandle}
        name="from"
        label="From"
        value={stateFrom}
        control={control}
      />
      <ReactHookFormDatePicker
        onChange={changeEndDateHandle}
        name="to"
        label="To"
        value={sateTo}
        control={control}
      />
    </Grid>
  );
};

export default DatePickersEdit;
