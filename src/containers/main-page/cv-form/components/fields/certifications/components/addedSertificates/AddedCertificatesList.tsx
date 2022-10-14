import { memo } from 'react';

import { v4 as uuidv4 } from 'uuid';

import type { Certificate } from 'common/models/User';
import { AddedCertificateItemStyled } from './styled';
import AddedCertificatesItem from './AddedCertificatesItem';

const AddedCertificatesList = function ({
  certificates,
}: {certificates: Certificate[]}): JSX.Element {
  return (
    <AddedCertificateItemStyled>
      {!!certificates.length && certificates.map(({ name, id, link }) => (
        <AddedCertificatesItem
          key={uuidv4()}
          certificate={name}
          id={id}
          link={link}
        />
      ))}
    </AddedCertificateItemStyled>
  );
};

export default memo(AddedCertificatesList);
