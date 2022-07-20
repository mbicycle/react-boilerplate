/* eslint-disable max-len */
import { memo } from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const RectangleIcon = function (props: SvgIconProps):JSX.Element {
  return (
    <SvgIcon {...props} viewBox="0 0 37 16">
      <rect x="0.0541992" width="36.6733" height="16" rx="2" fill="#E2E6EF" />
    </SvgIcon>
  );
};

export default memo(RectangleIcon);
