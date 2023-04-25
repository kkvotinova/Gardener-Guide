import { styled, css, Stack } from '@mui/material';

import transientProps from '@/utils/transientProps';

export const StyledInfoCard = styled(Stack, transientProps)<{ $hasInfo: boolean }>`
  padding: 8px 0px;
  width: 148px;

  border-radius: 12px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);

  transition: all 0.3s linear;

  ${({ $hasInfo }) =>
    $hasInfo &&
    css`
      cursor: pointer;
      &:hover {
        transform: scale(0.95);
        background-color: rgba(0, 0, 0, 0.02);
      }
    `}
`;

export const StyledImage = styled('img')`
  width: 12px;
  height: 12px;
  position: absolute;
  right: 8px;
  top: 0px;
`;
