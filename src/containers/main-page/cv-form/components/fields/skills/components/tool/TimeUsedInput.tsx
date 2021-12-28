import { memo } from 'react';

import TextFieldOutlined from 'common/components/text-field-outlined';

import { TimeUsedInputText } from '../../utils/constants';

const TimeUsedInput = function (): JSX.Element {
  return (
    <TextFieldOutlined
      type="number"
      autoComplete="false"
      defaultValue=""
      label={TimeUsedInputText.Label}
      name={TimeUsedInputText.Name}
      onChange={() => null}
    />
  );
};

export default memo(TimeUsedInput);
