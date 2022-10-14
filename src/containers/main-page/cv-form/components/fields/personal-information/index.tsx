import { memo } from 'react';

import FileUpload from './file-upload/index';
import PersonalDataForm from './form/index';

const PersonalInformation = function (): JSX.Element {
  return (
    <>
      <FileUpload />
      <PersonalDataForm />
    </>
  );
};

export default memo(PersonalInformation);
