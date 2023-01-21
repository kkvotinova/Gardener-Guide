import { IconProps, IconSize } from '@/components/Icon/IconTypes';
import { StyledIcon } from '@/components/Icon/IconStyled';

const Icon = ({
  isPointer,
  isFillHover,
  size,
  children,
  customWidth,
  customHeight,
  isCustomStyle = false,
  ...restProps
}: IconProps<IconSize>) => {
  const iconSize = parseInt(size || IconSize.m);

  return (
    <StyledIcon
      {...restProps}
      $isPointer={isPointer}
      $isFillHover={isFillHover}
      $isCustomStyle={isCustomStyle}
      width={customWidth || iconSize}
      height={customHeight || iconSize}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      {children}
    </StyledIcon>
  );
};

export default Icon;
