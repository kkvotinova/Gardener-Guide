/* eslint-disable max-len */

import { IconProps, IconSize } from '@/components/Icon/IconTypes';
import Icon from '@/components/Icon';

const IconSun = ({ size = IconSize.l, ...restProps }: IconProps) => {
  return (
    <Icon {...restProps} customWidth={52} customHeight={52} viewBox='0 0 36 36'>
      <path
        fill='#FFAC33'
        d='M16 2s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2V2zm18 14s2 0 2 2s-2 2-2 2h-2s-2 0-2-2s2-2 2-2h2zM4 16s2 0 2 2s-2 2-2 2H2s-2 0-2-2s2-2 2-2h2zm5.121-8.707s1.414 1.414 0 2.828s-2.828 0-2.828 0L4.878 8.708s-1.414-1.414 0-2.829c1.415-1.414 2.829 0 2.829 0l1.414 1.414zm21 21s1.414 1.414 0 2.828s-2.828 0-2.828 0l-1.414-1.414s-1.414-1.414 0-2.828s2.828 0 2.828 0l1.414 1.414zm-.413-18.172s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828l-1.414 1.414zm-21 21s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828l-1.414 1.414zM16 32s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2v-2z'
      ></path>
      <circle fill='#FFAC33' cx='18' cy='18' r='10'></circle>
    </Icon>
  );
};

export default IconSun;
