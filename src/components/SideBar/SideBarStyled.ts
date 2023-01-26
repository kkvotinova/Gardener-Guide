import { css, styled, Typography } from '@mui/material';

import transientProps from '@/utils/transientProps';

export const StyledSideBar = styled('div')`
  padding: 10px 0;

  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: ${({ theme }) => theme.shape.borderRadiusSecond};
`;

export const StyleTypography = styled(Typography, transientProps)<{ $isActive: boolean }>`
  padding: 10px 90px 10px 40px;
  width: 100%;

  cursor: pointer;
  transition: all 0.3s linear;
  border-radius: ${({ theme }) => theme.shape.borderRadius};

  ${({ $isActive, theme }) =>
    $isActive
      ? css`
          color: ${theme.palette.primary.dark};
        `
      : css`
          :hover {
            transform: scale(0.9);
            background-color: rgba(33, 203, 119, 0.2);
          }
        `}
`;
