import { memo } from 'react';

import ProfiencyItem from 'common/components/profiency/ProfiencyItem';

import { useDeleteUserCertificate } from '../../lib/query-hooks';

const AddedCertificatesItem = function ({
  certificate, date,
}: {certificate: string, date: Date | null | string}): JSX.Element {
  const { mutateAsync: deleteBy } = useDeleteUserCertificate();
  const onDeleteCertificateHandle = (): void => {
    deleteBy(certificate);
  };

  return (
    <ProfiencyItem
      headText={certificate}
      bodyText={date ? date.toString() : 'null'}
      onDelete={onDeleteCertificateHandle}
    />
  );
};

export default memo(AddedCertificatesItem);
