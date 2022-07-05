import { memo } from 'react';

import type { Certificate } from 'common/models/User';
import { AddedCertificateItemStyled } from './styled';
import AddedCertificatesItem from './AddedCertificatesItem';

const AddedCertificatesList = function ({
  certificates,
}: {certificates: Certificate[]}): JSX.Element {
  return (
    <AddedCertificateItemStyled>
      {certificates.map(({ name, date }) => (
        <AddedCertificatesItem
          key={name}
          certificate={name}
          date={date}
        />
      ))}
    </AddedCertificateItemStyled>
  );
};

export default memo(AddedCertificatesList);
