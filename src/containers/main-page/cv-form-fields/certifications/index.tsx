import React, { memo } from 'react';

interface CertificationsProps {
    value: { [key: string]: string };
}

const Certifications = function ({ value }: CertificationsProps): JSX.Element {
  return (
    <div>
      Certifications Form Part
    </div>
  );
};

export default memo(Certifications);
