import React from 'react';

interface CertificationsProps {
    value: { [key: string]: string };
}

const Certifications = function ({ value }: CertificationsProps): JSX.Element {
  return (
    <div>
      Certifications Form Part
      {value}
    </div>
  );
};

export default Certifications;
