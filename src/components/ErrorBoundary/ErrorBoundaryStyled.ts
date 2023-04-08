import Image from 'mui-image';
import { styled } from '@mui/material';

import Icon500 from '@/icons/Icon500';
import Icon404 from '@/icons/Icon404';

export const StyledErrorBoundary = styled('div')`
  width: 100%;
  height: 100%;

  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledIcon404 = styled(Icon404)`
  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 100%;
    height: auto;
  }
`;

export const StyledIcon500 = styled(Icon500)`
  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 80%;
    height: auto;
  }
`;

export const StyledImage = styled(Image)`
  max-width: 400px;
  max-height: 256px;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 60%;
  }
`;
