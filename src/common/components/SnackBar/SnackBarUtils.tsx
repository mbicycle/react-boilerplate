import { useSnackbar, VariantType, WithSnackbarProps } from 'notistack';
import React from 'react';

interface IProps {
  setUseSnackbarRef: (showSnackbar: WithSnackbarProps) => void;
}

const InnerSnackbarUtilsConfigurator: React.FC<IProps> = function ({ setUseSnackbarRef }: IProps) {
  setUseSnackbarRef(useSnackbar());
  return null;
};

let useSnackbarRef: WithSnackbarProps;
const setUseSnackbarRef = (useSnackbarRefProp: WithSnackbarProps): void => {
  useSnackbarRef = useSnackbarRefProp;
};

export const SnackbarUtilsConfigurator = function ():JSX.Element {
  return (
    <InnerSnackbarUtilsConfigurator
      setUseSnackbarRef={setUseSnackbarRef}
    />
  );
};

export default {
  success(msg: string): void {
    this.toast(msg, 'success');
  },
  warning(msg: string): void {
    this.toast(msg, 'warning');
  },
  info(msg: string): void {
    this.toast(msg, 'info');
  },
  error(msg: string): void {
    this.toast(msg, 'error');
  },
  toast(msg: string, variant: VariantType = 'default'): void {
    useSnackbarRef.enqueueSnackbar(msg, { variant });
  },
};
