import { CircularProgress } from '@mui/material';

import { LoaderProps } from '@/components/Loader/LoaderTypes';
import { StyledLoader } from '@/components/Loader/LoaderStyled';

import useMount from '@/hooks/useMount';

const Loader = ({
  onMount,
  color = 'inherit',
  size = 64,
  isStatic,
  isCenter,
  className,
}: LoaderProps) => {
  useMount(() => {
    if (onMount) onMount();
  });

  return (
    <StyledLoader
      $isJustifyCenter={!isStatic || isCenter}
      $isStatic={isStatic}
      className={className}
    >
      <CircularProgress size={size} color={color} />
    </StyledLoader>
  );
};

export default Loader;
