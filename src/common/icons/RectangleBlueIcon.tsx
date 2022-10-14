import { memo } from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const RectangleBlueIcon = function (props: SvgIconProps):JSX.Element {
  return (
    <SvgIcon {...props} viewBox="0 0 38 16">
      <rect x="0.987793" width="36.6733" height="16" rx="2" fill="#2A57E0" />
    </SvgIcon>
  );
};

export default memo(RectangleBlueIcon);
