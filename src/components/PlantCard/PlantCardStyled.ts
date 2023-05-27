import { Link } from 'react-router-dom';
import MuiImage from 'mui-image';
import { css, styled } from '@mui/material';

import transientProps from '@/utils/transientProps';

export const StyledPlantCard = styled(Link, transientProps)<{ $hasSmallSize: boolean }>`
  padding: ${({ $hasSmallSize }) => ($hasSmallSize ? '10px 0' : '16px 0')};
  width: ${({ $hasSmallSize }) => ($hasSmallSize ? '100px' : '160px')};

  display: flex;
  align-items: center;
  flex-direction: column;

  border-radius: 12px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);

  background: ${({ theme }) => theme.palette.common.white};

  transition: all 0.3s linear;

  &:hover {
    color: ${({ theme }) => theme.palette.primary.dark};
    transform: scale(0.95);
  }

  @media (max-width: 600px) {
    ${({ $hasSmallSize }) =>
      !$hasSmallSize &&
      css`
        padding: 8px;
        width: 120px;
      `}
  }
`;

export const StyledImage = styled(MuiImage, transientProps)<{ $hasSmallSize: boolean }>`
  margin-bottom: ${({ $hasSmallSize }) => ($hasSmallSize ? '6px' : '16px')};
  max-width: ${({ $hasSmallSize }) => ($hasSmallSize ? '32px' : '100px')};
  max-height: ${({ $hasSmallSize }) => ($hasSmallSize ? '32px' : '100px')};

  @media (max-width: 600px) {
    ${({ $hasSmallSize }) =>
      !$hasSmallSize &&
      css`
        max-width: 60px;
        max-height: 60px;
      `}
  }
`;
