import React, {
  createRef, memo, useCallback,
} from 'react';
import { SnackbarKey, SnackbarProvider } from 'notistack';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { SnackbarUtilsConfigurator } from 'common/components/SnackBar/SnackBarUtils';

const AppSnackbarProvider = function ({ children }: {children: React.ReactElement}): JSX.Element {
  const notistackRef = createRef<SnackbarProvider>();

  const onClickDismiss = useCallback((_: React.MouseEvent<HTMLButtonElement>, key: SnackbarKey):void => {
    notistackRef.current?.closeSnackbar(key as SnackbarKey);
  }, [notistackRef]);

  const IconButtonMemoized = useCallback((key: string) => (
    <IconButton
      color="default"
      onClick={(e) => onClickDismiss(e, key)}
    >
      <CloseIcon />
    </IconButton>
  ), [onClickDismiss]);

  return (
    <SnackbarProvider
      maxSnack={3}
      ref={notistackRef}
      dense
      preventDuplicate
      action={IconButtonMemoized}
    >
      <SnackbarUtilsConfigurator />
      {children}
    </SnackbarProvider>
  );
};

export default memo(AppSnackbarProvider);
