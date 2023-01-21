import { MouseEvent, ReactNode } from 'react';

export enum IconSize {
  s = '16',
  m = '20',
  l = '24',
}

export interface IconProps<T extends IconSize = IconSize> {
  size?: T;
  viewBox?: string;

  isPointer?: boolean;
  isFillHover?: boolean;
  isCustomStyle?: boolean;

  customWidth?: number;
  customHeight?: number;

  className?: string;
  onClick?: (e: MouseEvent<SVGElement>) => void;
  onMouseDown?: (e: MouseEvent<SVGElement>) => void;

  color?: string;
  children?: ReactNode;
}

export interface StyledIconProps {
  $isPointer?: boolean;
  $isFillHover?: boolean;
  $isIconHack?: boolean;
  $isCustomStyle?: boolean;
}
