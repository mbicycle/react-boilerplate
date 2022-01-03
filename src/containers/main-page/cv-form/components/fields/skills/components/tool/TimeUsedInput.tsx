import { memo } from 'react';

import TextFieldOutlined from 'common/components/text-field-outlined';

import { TimeUsedInputText } from '../../utils/constants';

const TimeUsedInput = function (
  { onChange, value }: {onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, value: number},
): JSX.Element {
  return (
    <TextFieldOutlined
      type="number"
      autoComplete="false"
      defaultValue={value}
      label={TimeUsedInputText.Label}
      name={TimeUsedInputText.Name}
      onChange={onChange}
    />
  );
};

export default memo(TimeUsedInput);
