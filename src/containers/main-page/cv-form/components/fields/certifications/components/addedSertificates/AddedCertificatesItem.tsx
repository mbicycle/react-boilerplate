import { memo } from 'react';

import ProfiencyItem from 'common/components/profiency/ProfiencyItem';

import dayjs from 'dayjs';
import { useDeleteUserCertificate } from '../../lib/query-hooks';

interface AddedCertificatesItemProps {
  certificate: string;
  id: Date | string;
  link: string | undefined;
}

const AddedCertificatesItem = function ({
  certificate, id, link,
}: AddedCertificatesItemProps): JSX.Element {
  const { mutateAsync: deleteBy, isLoading } = useDeleteUserCertificate();
  const onDeleteCertificateHandle = (): void => {
    deleteBy(certificate);
  };

  return (
    <ProfiencyItem
      headText={certificate}
      bodyText={id ? dayjs(id).format('DD.MM.YYYY') : ''}
      onDelete={onDeleteCertificateHandle}
      link={link}
      isLoading={isLoading}
    />
  );
};

export default memo(AddedCertificatesItem);
