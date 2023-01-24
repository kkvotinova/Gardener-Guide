/* eslint-disable max-len */

import { IconProps, IconSize } from '@/components/Icon/IconTypes';
import Icon from '@/components/Icon';

const IconClose = ({ size = IconSize.l, ...restProps }: IconProps) => {
  return (
    <Icon {...restProps} size={size} viewBox='0 0 24 24'>
      <path
        d='M4 20L12 12M20 4L12 12M12 12L20 20M12 12L4 4'
        stroke='#CCCDD3'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Icon>
  );
};

export default IconClose;
