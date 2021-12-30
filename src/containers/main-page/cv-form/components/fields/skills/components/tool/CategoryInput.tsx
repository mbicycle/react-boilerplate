import { ChangeEvent, memo } from 'react';

import TextFieldOutlined from 'common/components/text-field-outlined';

import { ToolInputText } from '../../utils/constants';

const CategoryInput = function (
  { onChange }: { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void },
): JSX.Element {
  return (
    <TextFieldOutlined
      autoComplete="false"
      defaultValue=""
      label={ToolInputText.Label}
      name={ToolInputText.Name}
      onChange={onChange}
    />
  );
};

export default memo(CategoryInput);
