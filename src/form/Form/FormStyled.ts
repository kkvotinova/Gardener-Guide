import { styled, css } from '@mui/material';

import transientProps from '@/utils/transientProps';

export const StyledForm = styled('form', transientProps)<{ $isFlexible?: boolean }>`
  width: 100%;

  ${({ $isFlexible }) =>
    $isFlexible &&
    css`
      flex: 1;
    `}

  display: flex;
  flex-direction: column;
`;
