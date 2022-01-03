import { memo } from 'react';

import TextFieldOutlined from 'common/components/text-field-outlined';

import { ToolInputText } from '../../utils/constants';

const SkillToolInput = function (
  { onChange, value }: { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, value: string },
): JSX.Element {
  return (
    <TextFieldOutlined
      autoComplete="false"
      defaultValue={value}
      label={ToolInputText.Label}
      name={ToolInputText.Name}
      onChange={onChange}
    />
  );
};

export default memo(SkillToolInput);
