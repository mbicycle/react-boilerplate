import { memo } from 'react';

import ProfiencyItem from 'common/components/profiency/ProfiencyItem';

import { useDeleteUserCertificate } from '../../lib/query-hooks';

const AddedCertificatesItem = function ({
  certificate, id, link,
}: {certificate: string, id: Date | null | string, link: string | undefined}): JSX.Element {
  const { mutateAsync: deleteBy } = useDeleteUserCertificate();
  const onDeleteCertificateHandle = (): void => {
    deleteBy(certificate);
  };

  return (
    <ProfiencyItem
      headText={certificate}
      bodyText={id ? id.toString() : 'null'}
      onDelete={onDeleteCertificateHandle}
      link={link}
    />
  );
};

export default memo(AddedCertificatesItem);
