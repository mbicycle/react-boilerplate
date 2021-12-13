import { memo } from 'react';

import FileUpload from './file-upload/index';

const PersonalInformation = function (): JSX.Element {
  return (
    <FileUpload />
  );
};

export default memo(PersonalInformation);
