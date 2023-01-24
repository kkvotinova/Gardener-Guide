import { styled } from '@mui/material';

import transientProps from '@/utils/transientProps';

export const StyledFormElement = styled('div', transientProps)<{
  $isCheckbox?: boolean;
}>`
  width: 100%;

  & + & {
    margin-top: 24px;
  }
`;
