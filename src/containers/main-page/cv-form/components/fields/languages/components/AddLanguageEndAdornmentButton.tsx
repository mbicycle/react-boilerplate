import { memo } from 'react';

import { IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import { Language } from 'common/models/User';
import { useCreateLanguage } from '../lib/query-hooks';

const AddLanguageEndAdornmentButton = function ({ values }: {values: Language}): JSX.Element {
  const { mutateAsync: createLangugeAsync } = useCreateLanguage();

  const onSaveLanguage = (): void => {
    createLangugeAsync(values as never);
  };

  return (
    <IconButton onClick={onSaveLanguage} disabled={!values.name} size="small">
      <SendIcon color={values.name ? 'primary' : 'disabled'} />
    </IconButton>
  );
};

export default memo(AddLanguageEndAdornmentButton);
