import { Link } from 'react-router-dom';
import { styled } from '@mui/material';

import transientProps from '@/utils/transientProps';

export const StyledPlantCard = styled(Link, transientProps)<{ $hasSmallSize: boolean }>`
  padding: ${({ $hasSmallSize }) => ($hasSmallSize ? '10px 0' : '16px 0')};
  width: ${({ $hasSmallSize }) => ($hasSmallSize ? '100px' : '160px')};

  display: flex;
  align-items: center;
  flex-direction: column;

  border-radius: 12px;
  box-shadow: 0px 8px 24px rgba(129, 135, 189, 0.15);
  background: ${({ theme }) => theme.palette.common.white};

  transition: all 0.3s linear;

  &:hover {
    color: ${({ theme }) => theme.palette.primary.dark};
    transform: scale(0.95);
  }
`;

export const StyledImage = styled('img', transientProps)<{ $hasSmallSize: boolean }>`
  margin-bottom: ${({ $hasSmallSize }) => ($hasSmallSize ? '6px' : '16px')};
  max-width: ${({ $hasSmallSize }) => ($hasSmallSize ? '32px' : '100px')};
  max-height: ${({ $hasSmallSize }) => ($hasSmallSize ? '32px' : '100px')};
`;
