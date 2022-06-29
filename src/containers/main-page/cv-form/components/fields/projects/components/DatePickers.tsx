import { UseFormReturn } from 'react-hook-form';

import { Grid } from '@mui/material';

import ReactHookFormDatePicker from 'common/components/react-hook-forms/ReactHookFormDatePicker';
import { getKeyOf } from 'common/utils/helpers';

import { ProjectFieldValues } from '../utils/types';

interface DatePickersProps {
formValues: UseFormReturn<ProjectFieldValues>;
}

const DatePickers = function ({ formValues }: DatePickersProps): JSX.Element {
  const changeStartDateHandle = (date: unknown): void => {
    if (date instanceof Date) {
      formValues.setValue('from', date.toString());
    }
  };

  const changeEndDateHandle = (date: unknown): void => {
    if (date instanceof Date) {
      formValues.setValue('to', date.toString());
    }
  };

  return (
    <Grid item container xs={12} wrap="nowrap" columnGap={4}>
      <ReactHookFormDatePicker
        control={formValues.control}
        onChange={changeStartDateHandle}
        name={getKeyOf<ProjectFieldValues>('from')}
        label="From"
      />
      <ReactHookFormDatePicker
        control={formValues.control}
        onChange={changeEndDateHandle}
        name={getKeyOf<ProjectFieldValues>('to')}
        label="To"
      />
    </Grid>
  );
};

export default DatePickers;
