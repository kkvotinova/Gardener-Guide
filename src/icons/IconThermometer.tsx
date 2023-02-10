/* eslint-disable max-len */

import { IconProps, IconSize } from '@/components/Icon/IconTypes';
import Icon from '@/components/Icon';

const IconThermometer = ({ size = IconSize.l, ...restProps }: IconProps) => {
  return (
    <Icon {...restProps} customWidth={52} customHeight={52} viewBox='0 0 55 69.8'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        fill='#70CAF2'
        d='M39.2,10.3h10.2c1.1,0,2.2-1,2.2-2.2c0-1.3-1-2.2-2.2-2.2H39.2
	c-1.1,0-2.2,0.9-2.2,2.2C37,9.2,38.1,10.3,39.2,10.3L39.2,10.3z'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        fill='#70CAF2'
        d='M49.4,16.1H39.2c-1.1,0-2.2,0.9-2.2,2.1c0,1.3,1,2.2,2.2,2.2h10.2
	c1.1,0,2.2-0.9,2.2-2.2C51.6,17,50.6,16.1,49.4,16.1L49.4,16.1z'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        fill='#70CAF2'
        d='M49.4,26.1H39.2c-1.1,0-2.2,1-2.2,2.3c0,1.1,1,2.2,2.2,2.2h10.2
	c1.1,0,2.2-1,2.2-2.2C51.6,27.2,50.6,26.1,49.4,26.1L49.4,26.1z'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        fill='#70CAF2'
        d='M49.5,35.6h-9.9c-1.2,0-2.2,0.9-2.2,2.2c0,1.3,0.9,2.2,2.2,2.2h9.9
	c1.1,0,2.1-0.9,2.1-2.2C51.6,36.5,50.7,35.6,49.5,35.6L49.5,35.6z'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        fill='#737371'
        d='M32.3,14.4c0-6.8-5.5-12.3-12.2-12.3c-6.8,0-12.3,5.5-12.3,12.3
	v27.5c-2.6,2.9-4,6.7-4,10.6c0,8.9,7.3,16.2,16.1,16.2c9,0,16.3-7.3,16.3-16.2c0-4-1.4-7.7-4-10.6V14.4z'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        fill='#FFFFFF'
        d='M20,64.3c-6.5,0-11.8-5.3-11.8-11.8c0-3.1,1.1-6,3.2-8.2
	c0.4-0.4,0.6-0.9,0.6-1.6V14.4c0-4.4,3.5-7.9,7.9-7.9c4.4,0,7.9,3.5,7.9,7.9v28.3c0,0.6,0.2,1.1,0.6,1.6c2.1,2.2,3.3,5.1,3.3,8.2
	C31.9,59,26.6,64.3,20,64.3L20,64.3z'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        fill='#70CAF2'
        d='M23.8,45.6l0.1-19.5c0-2-1.7-3.6-3.6-3.6c-2,0-3.6,1.7-3.6,3.6
	l-0.2,19.5c-2.3,1.3-4,3.9-4,6.8c0,4.3,3.4,7.7,7.6,7.7c4.3,0,7.7-3.4,7.7-7.7C27.8,49.4,26.1,46.8,23.8,45.6L23.8,45.6z'
      />
    </Icon>
  );
};

export default IconThermometer;
