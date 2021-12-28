import { memo } from 'react';

import TextFieldOutlined from 'common/components/text-field-outlined';

import { ToolInputText } from '../../utils/constants';

const CategoryInput = function (): JSX.Element {
  return (
    <TextFieldOutlined
      autoComplete="false"
      defaultValue=""
      label={ToolInputText.Label}
      name={ToolInputText.Name}
      onChange={() => null}
    />
  );
};

export default memo(CategoryInput);
