import { memo } from 'react';
import { UseFormReturn, FieldValues } from 'react-hook-form';

import { Grid } from '@mui/material';

import ReactHookFormDatePicker from 'common/components/react-hook-forms/ReactHookFormDatePicker';
import { getKeyOf } from 'common/utils/helpers';

import { ProjectFieldValues } from '../utils/types';

interface DatePickersProps {
  formValues: UseFormReturn<ProjectFieldValues>;
  defaultValue?: FieldValues;
}

const DatePickers = function ({ formValues, defaultValue }: DatePickersProps): JSX.Element {
  const changeStartDateHandle = (date: unknown): void => {
    if (date instanceof Date) {
      formValues.setValue('from', date.toDateString());
    }
  };

  const changeEndDateHandle = (date: unknown): void => {
    if (date instanceof Date) {
      formValues.setValue('to', date.toDateString());
    }
  };

  return (
    <Grid item container xs={12} wrap="nowrap" columnGap={4}>
      <ReactHookFormDatePicker
        control={formValues.control}
        key="from"
        defaultValue={new Date(defaultValue?.from)}
        onChange={changeStartDateHandle}
        name={getKeyOf<ProjectFieldValues>('from')}
        label="From"
      />
      <ReactHookFormDatePicker
        control={formValues.control}
        key="to"
        defaultValue={new Date(defaultValue?.to)}
        onChange={changeEndDateHandle}
        name={getKeyOf<ProjectFieldValues>('to')}
        label="To"
      />
    </Grid>
  );
};

export default memo(DatePickers);
